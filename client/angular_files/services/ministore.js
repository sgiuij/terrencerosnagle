(function () {
  'use strict'

  angular
    .module('myApp')
    .factory('ministoreFactory', factory)

  function factory ($http) {
    var factory = {}

  //   factory.getSession = function (callback) {
  //     $http.get('/session')
  //       .then(function (returnData) {
  //         callback(returnData)
  //       })
  //   }

    factory.newProduct = function (productInfo, callback) {
      $http.post('/products/new', productInfo)
        .then(function (returnData) {
          callback(returnData)
        })
    }

    factory.allProducts = function (callback) {
      $http.get('/products')
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.deleteProduct = function (productId, callback) {
      $http.post('/products/'+productId)
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.deleteCustomer = function (customerId, callback) {
      $http.post('/customers/'+customerId)
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.newCustomer = function (productInfo, callback) {
      $http.post('/customer/new', productInfo)
        .then(function (returnData) {
            callback(returnData)
        })
    }
    factory.allCustomers = function (callback) {
      $http.get('/customers')
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.newOrder = function (productInfo, callback) {
      $http.post('/orders/new', productInfo)
        .then(function (returnData) {
            callback(returnData)
        })
    }
    factory.allOrders = function (callback) {
      $http.get('/orders')
        .then(function (returnData) {
            callback(returnData)
        })
    }
    factory.prodQuantity = function (callback){
      $http.get('/products/quantity')
        .then(function (returnData) {
            callback(returnData)
        })
    }

    // factory.register = function (userInfo, callback) {
    //   console.log('333333333333333333333')
    //   $http.post('/register', userInfo)
    //     .then(function (returnData) {
    //       callback(returnData)
    //     })
    // }
    // factory.logout = function (callback) {
    //   $http.post('/logout')
    //     .then(function (returnData) {
    //       callback(returnData)
    //     })
    // }
    return factory
  
}})()