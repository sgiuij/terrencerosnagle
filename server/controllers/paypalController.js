var mongoose = require('mongoose')
var Rate = mongoose.model('Rate')


module.exports = {

  newRate: function (req, res) {
    var rate = new Rate(req.body)
    console.log('newRate server')
    console.log(req.body)
    rate.save(function (err,rates) {
      if (err){
        console.log(err)
          res.json({errors: err })
      }else{
        console.log('rates added to server')
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