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
    Service.remove({_id:req.params.id},function(err,ser){
      if (err){
        res.json({errors:err})
      }else{
        res.json({ser})
      }
    })
  }


}