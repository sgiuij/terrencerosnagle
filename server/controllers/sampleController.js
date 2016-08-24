var mongoose = require('mongoose')
var Sample = mongoose.model('Sample')


module.exports = {
  newSample: function (req, res) {
    var sam = new Sample(req.body)
    sam.save(function (err,sam) {
      if (err){
          res.json({errors:err})
      }else{
        res.json({sam})
      }
    })
  },
  
  allSample: function(req,res){
    Sample.find({_id:req.params.id},function(err,sam){
      if (err){
        res.json({errors: err })
      }else{
        res.json({sam})
      }
    })
  },
  
  deleteSample: function(req,res){
    Sample.remove({_id:req.params.id},function(err,sam){
      if (err){
        res.json({errors:err})
      }else{
        res.json({sam})
      }
    })
  }
      

}