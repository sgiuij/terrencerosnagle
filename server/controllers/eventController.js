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
    Event.find({}, function(err, events){
      if (err){
        res.json({status:false,errors: err })
      }else{
        res.json({events})
      }
    })  
  },
  
  session: function(req, res){
    if (req.session['eventInfo']) return res.json({userInfo: req.session['eventInfo'] })
    res.json({ status: false})
  }  

}