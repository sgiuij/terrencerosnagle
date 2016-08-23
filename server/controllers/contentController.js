var mongoose = require('mongoose')
var User = mongoose.model('User')


module.exports = {
    
  getall: function(req,res){
    User.find({_id:req.params.id},function(err,users){
      if (err){
        res.json({errors: err })
      }else{
        res.json({users})
      }
    })
  }
      

}