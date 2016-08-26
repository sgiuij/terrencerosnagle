var mongoose = require('mongoose')
var User = mongoose.model('User')


module.exports = {
  newUser: function (req, res) {
    var user = new User(req.body)
    user.save(function (err,users) {
      if (err){
          res.json({errors: err })
      }else{
        res.json({users})
      }
    })
  },
    
  deleteUser: function(req,res){
    User.remove({_id:req.params.id},function(err,users){
      if (err){
        res.json({errors: err })
      }else{
        res.json({users})
      }
    })
  },

  allUsers: function(req,res){
    User.find({}, function(err, users){
      if (err){
        res.json({errors: err })
      }else{
        res.json({users})
      }
    })  
  },

  deactivateUser: function(req,res){
    User.find({}, function(err, users){
      if (err){
        res.json({errors: err })
      }else{
        res.json({users})
      }
    })  
  },

  activateUser: function(req,res){
    User.find({}, function(err, users){
      if (err){
        res.json({errors: err })
      }else{
        res.json({users})
      }
    })  
  }
      

}