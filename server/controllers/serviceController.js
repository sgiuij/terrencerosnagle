var mongoose = require('mongoose')
var Service = mongoose.model('Service')



module.exports = {
  newService: function (req, res) {
    var ser = new Service(req.body)
    ser.save(function (err,ser) {
      if (err){
          res.json({errors:err})
      }else{
        res.json({ser})
      }
    })
  },
  
  getService: function(req,res){
    Content.find({_id:req.params.id},function(err,ser){
      if (err){
        res.json({errors: err })
      }else{
        res.json({ser})
      }
    })
  },
  
  deleteService: function(req,res){
    Content.remove({_id:req.params.id},function(err,ser){
      if (err){
        res.json({errors:err})
      }else{
        res.json({ser})
      }
    })
  }



  


}