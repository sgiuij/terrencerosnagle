var mongoose = require('mongoose')
var Admin = mongoose.model('Admin')

module.exports = {
  newAdmin: function (req, res) {
    var admin = new Admin(req.body)
    admin.save(function (err,admins) {
      if (err){
          res.json({errors:err})
      }else{
        res.json({admins})
      }
    })
  },
    
  allAdmins: function(req,res){
    var admin = new Admin(req.body)
    admin.save(function(err, admins){
      if (err){
          res.json({errors: err })
      }else{
        res.json({admins})
      }
    })
  },

  deleteAdmin: function(req,res){
    Admin.remove({_id:req.params.id},function(err,admins){
      if (err){
        res.json({errors:err})
      }else{
        res.json({admins})
      }
    })
  }

}