(function () {
  'use strict'

  angular
    .module('myApp')
    .factory('paypalFactory', factory)

  function factory ($http) {
    var factory = {}

    factory.newRate = function (rateinfo, callback) {
      console.log('newRate factory')
      console.log(rateinfo)
      $http.post('/rate/new', rateinfo)
        .then(function (returnData) {
          console.log('newRate factory2')
          callback(returnData)
        })
    }

    factory.allRates = function (callback) {
      console.log('in allRates factory')
      $http.get('/rates')
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.deleteRate = function (id, callback) {
      $http.post('/rate/delete/',id)
        .then(function (returnData) {
            callback(returnData)
        })
    }

    return factory
  
}})()