var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs')
  
var AdminSchema = new mongoose.Schema({
  name:{type:String, required:true},
  email:{type:String, required:true},
  password:{type:String,required:true}
}, {timestamps: true})

AdminSchema.methods.validPassword = function (enterdPassword) {
  return bcrypt.compareSync(enterdPassword, this.password)
}

var EventSchema = new mongoose.Schema({
  date:{type:Date, required:true},
  time:{type:String, required:true},
  location:{type:String, required:true},
  content:{type:String, required:true}
}, {timestamps: true})

var UserSchema = new mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String, required:true},
  status:{type:Boolean, required:true, default:true},
  password:{type:String,required:true}
})

var ServiceSchema = new mongoose.Schema({
  page:{type:String, required:true},
  content:[{type:String, required:true}],
  picturelink:[{type:String}],
  videolink:[{type:String}]
})

var SampleSchema = new mongoose.Schema({
  description:{type:String},
  audiolink:{type:String,required:true}
})

var RateSchema = new mongoose.Schema({
  service:{type:String, required:true},
  duration:{type:String, required:true},
  location:{type:String},
  note:{type:String},
  price:{type:String, required:true}
}, {timestamps: true})


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
mongoose.model('Rate', RateSchema)
mongoose.model('Event',EventSchema)
mongoose.model('User',UserSchema)
mongoose.model('Service',ServiceSchema)
mongoose.model('Sample',SampleSchema)


