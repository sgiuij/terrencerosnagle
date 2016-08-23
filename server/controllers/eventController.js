var mongoose = require('mongoose')
var Event = mongoose.model('Event')


module.exports = {

  newEvent: function (req, res) {
    var event = new Event(req.body)
    event.save(function (err,events) {
      if (err){
          res.json({errors: err })
      }else{
        res.json({events})
      }
    })
  },

  thisEvent: function (req, res) {
    Event.update({},function (err,events) {
      if (err){
          res.json({errors: err })
      }else{
        res.json({events})
      }
    })
  },
    
  deleteEvent: function(req,res){
    Event.remove({_id:req.params.id},function(err,events){
      if (err){
        res.json({errors: err })
      }else{
        res.json({events})
      }
    })
  },

  allEvents: function(req,res){
    console.log('in allEvents backend controller')
    Event.find({}, function(err, events){
      if (err){
        res.json({errors: err })
      }else{
        res.json({events})
      }
    })  
  }
  
}