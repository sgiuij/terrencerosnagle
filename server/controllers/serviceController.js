var mongoose = require('mongoose')
var Service = mongoose.model('Service')



module.exports = {


  newService: function (req, res) {
    console.log('newservice server side controller')
    console.log(req.body)
    Service.findOne({page:req.body.page},function(err,ser){
        if (err){
          res.json({errors: err })
        }else if(ser===null){
          console.log('no existing data')
          var ser = new Service(req.body)
          ser.save(function (err,ser) {
            if (err){
                console.log("ERROR")
                res.json({errors:err})
            }else{
              console.log("SUCCESS")
              console.log(ser)
              res.json({ser})
            }
          })
        }else{
          console.log('okok')
          var updateQuery = {
            $push : {}
          };
          
          if(req.body.picturelink && req.body.picturelink.length) {
            updateQuery.$push.picturelink = req.body.picturelink;
          }
          if(req.body.vdeiolink && req.body.videolink.length) {
            updateQuery.$push.videolink = req.body.videolink;
          }
          Service.update({page:req.body.page},updateQuery,function(err,thisser){
            if (err){
                res.json({errors:err})
            }else{
              res.json({thisser})
            }
          })
        }
      })
  },
    
  
  getService: function(req,res){
    Service.find({},function(err,ser){
      if (err){
        res.json({errors: err })
      }else{
        res.json({ser})
      }
    })
  },
  
  deleteService: function(req,res){
    console.log('deleteService backend controller')
    console.log(req.body)

    Service.remove({_id:req.params.id,picturelink:{$in:[req.body.link]}},function(err,ser){
      if (err){
        Service.remove({_id:req.params.id,videolink:{$in:[req.body.link]}},function(err,ser2){
          if(err){
            res.json({erros:err})
          }else{
            res.json({ser2})
          }
        })

      }else{
        res.json({ser})
      }
    })
  }


}