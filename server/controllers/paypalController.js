var mongoose = require('mongoose')
var Rate = mongoose.model('Rate')


module.exports = {

  newRate: function (req, res) {
    var event = new Rate(req.body)
    event.save(function (err,rates) {
      if (err){
          res.json({errors: err })
      }else{
        res.json({rates})
      }
    })
  },
    
  deleteRate: function(req,res){
    Rate.remove({_id:req.body.id},function(err,rates){
      if (err){
        res.json({errors: err })
      }else{
        res.json({rates})
      }
    })
  },

  allRates: function(req,res){
    Rate.find({}, function(err, rates){
      if (err){
        res.json({errors: err })
      }else{
        res.json({rates})
      }
    })  
  }
  
}