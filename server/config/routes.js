var ministore = require('../controllers/ministore.js')

module.exports = function (app) {
  app.post('/products/new', ministore.newProduct)
  app.post('/products/:id', ministore.deleteProduct)
  app.get('/products', ministore.allProducts)
  app.get('/customers', ministore.allCustomers)
  app.post('/customers/:id',ministore.deleteCustomer)
  app.post('/orders/new',ministore.newOrder)
  app.get('/orders',ministore.allOrders)
  app.post('/customer/new', ministore.newCustomer)
}