(function () {
  'use strict'

  angular
    .module('myApp')
    .factory('userFactory', factory)

  function factory ($http) {
    var factory = {}

   factory.newUser = function (productInfo, callback) {
      $http.post('/products/new', productInfo)
        .then(function (returnData) {
          callback(returnData)
        })
    }

    factory.allUser = function (callback) {
      $http.get('/products')
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.deactivateUser = function (productId, callback) {
      $http.post('/products/'+productId)
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.activateUser = function (productId, callback) {
      $http.post('/products/'+productId)
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.deleteUser = function (productId, callback) {
      $http.post('/products/'+productId)
        .then(function (returnData) {
            callback(returnData)
        })
    }
    return factory
  
}})()