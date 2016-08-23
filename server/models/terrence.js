var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs')

// var UserSchema = new mongoose.Schema({
//   first_name: {type: String, required: true, minlength: 2, maxlength: 256},
//   last_name: {type: String, required: true, minlength: 2, maxlength: 256},
//   email: {type: String, required: true, minlength: 6, maxlength: 256, unique: true},
//   password: {type: String, required: true, minlength: 8, maxlength: 256}
// }, {timestamps: true})

// UserSchema.methods.validPassword = function (enterdPassword) {
//   return bcrypt.compareSync(enterdPassword, this.password)
// }
  
var AdminSchema = new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true},
  password:{type:String,required:true}
}, {timestamps: true})

var EventSchema = new mongoose.Schema({
  date:{type:Date, required:true},
  time:{type:String, required:true},
  location:{type:String, required:true},
  content:{type:String, required:true}
}, {timestamps: true})

var BioSchema = new mongoose.Schema({
  content:{type:String, required:true},
  picturelink:[{type:String}]
})

var UserSchema = new mongoose.Schema({
  email:{type:String, required:true},
  password:{type:String,required:true}
})

var ContentSchema = new mongoose.Schema({
  content:{type:String, required:true},
  picturelink:[{type:String}]
})

AdminSchema.pre('save', function (next) {
  bcrypt.genSalt(10, function (err, salt) {
    if (err) console.log(err)
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) console.log(err)
      user.password = hash
      next()
    })
  })
})

mongoose.model('Admin', AdminSchema)
mongoose.model('Event',EventSchema)
mongoose.model('User',UserSchema)
mongoose.model('Bio',BioSchema)
mongoose.model('Content',ContentSchema)
