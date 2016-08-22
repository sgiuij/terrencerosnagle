var mongoose = require('mongoose')
var Customer = mongoose.model('Customer')
var Product = mongoose.model('Product')
var Order = mongoose.model('Order')

module.exports = {
  newProduct: function (req, res) {
    var prod = new Product(req.body)
    prod.save(function (err,products) {
      if (err){
          res.json({status:false,errors: err })
      }else{
        res.json({status:true,products:products})
      }
    })
  },
    
  newCustomer: function(req,res){
    var customer = new Customer(req.body)
    customer.save(function(err, customers){
      if (err){
          res.json({status:false,errors: err })
      }else{
        res.json({status:true, customers:customers})
      }
    })
  },

  deleteProduct: function(req,res){
    Product.remove({_id:req.params.id},function(err,products){
      if (err){
        res.json({status:false,errors: err })
      }else{
        res.json({status:true, data:products})
      }
    })
  },

  deleteCustomer: function(req,res){
    Customer.remove({_id:req.params.id},function(err){
      if (err){
        res.json({status:false,errors: err })
      }else{
        res.json({status:true})
      }
    })
  },

  allProducts: function(req,res){
    Product.find({}, function(err, products){
      if (err){
        res.json({status:false,errors: err })
      }else{
        res.json({products})
      }
    })  
  },

  allCustomers: function(req,res){
    Customer.find({}, function(err, customers){
      if (err){
        res.json({status:false,errors: err })
      }else{
        res.json({customers})
      }
    })
  },

  allOrders: function(req,res){
    Order.find({})
    .populate('_products _customer')
    .exec(function(err,orders){
      if(err){
        res.json({errors:err})
      }else{
        console.log(orders)
        res.json({orders})
      } 
    })
  },       

// allOrders: function(req,res){
//     Order.find({})
//     .populate('_products _customers')
//     .exec()
//   },       

  newOrder: function(req,res){
    console.log(req.body)//{}
    // var theprod = Product.find({_id:req.body.product.id});


    Customer.findOne({_id:req.body.customer._id, _products:{$in:[req.body.prodname._id]}},function(err,thecust){
      if(err){
        console.log(err)
      }else{
        var qt = req.body.prodname.quantity - req.body.prodquantity;
        var custqt = req.body.customer.quantity + req.body.prodquantity;
        if(qt<0){
          res.json({errors:"quantity not available"})
        }else{       
          if(thecust===null){
            var order = new Order({
              _customer : req.body.customer._id,
              _products : req.body.prodname._id,
              prodquantity:req.body.prodquantity
            })
            order.save(function(err,orders){
              if(err){
                res.json({errors:err})
              }else{
                Customer.update({_id:req.body.customer._id},{$push:{_orders:orders._id, _products:req.body.prodname._id, quantity:req.body.prodquantity}},function(err,customers){
                  if(err){
                    res.json({errors:err})
                  }else{
                    Product.update({_id:req.body.prodname._id},{$push:{_orders:orders._id, _customers:req.body.customer._id},$set:{quantity:qt}},function(err,products){
                      if(err){
                        res.json({errors:err})
                      }else{
                        res.json({orders:orders, customers:customers, products:products})
                      }
                      
                    })
                  }

              }) 
            }
          })
                 
             
          }//customer has doesnt have this product
          else{
            var order = new Order({
              _customer : req.body.customer._id,
              _products : req.body.prodname._id,
              prodquantity:req.body.prodquantity
            })
              order.save(function(err,orders){
                if(err){
                  res.json({errors:err})
                }else{
                  Customer.update({_id:req.body.customer._id, _products:{$in:[req.body.prodname._id]}},{$push:{_orders:orders._id}, $set:{quantity:custqt}},function(err,customer){
                    Product.update({_id:req.body.prodname._id,_customers:{$in:[req.body.customer._id]}},{$push:{_orders:orders._id},$set:{quantity:qt}},function(err,product){
                      var order = new Order(req.body)
                      order.save(function(err,orders){
                        if(err){
                          res.json({errors:err})
                        }else{
                          res.json({orders:orders, customer:customer, product:product})
                        }
                      })
                    })
                  })  
                }
              })
          }//customer has bought this product before  
      }
      
    }
  })
}
//   login: function (req, res) {
//     User.findOne({email: req.body.email}, function (err, user) {
//       if (err) res.json({status: false, errors: err})
//       else if (user) {
//         if (user.validPassword(req.body.password)) {
//           req.session['userInfo'] = {
//             id: user._id,
//             first_name: user.first_name
//           }
//           res.json({status: true, userInfo: req.session['userInfo']})
//         } else {
//           res.json({status: false, errors: 'User not found'})
//         }
//       } else {
//         res.json({status: false, errors: 'User not found'})
//       }
//     })
//   },

//   logout: function (req, res) {
//     req.session.destroy(function (err) {
//       if (err) res.json({ status: false, errors: err })
//       res.json({ status: true })
//     })
//   },
//   session: function(req, res){
//     console.log('hit session route')
//     if (req.session['userInfo']) res.json({ status: true ,userInfo: req.session['userInfo'] })
//     res.json({ status: false , userInfo: null })
//   }
}