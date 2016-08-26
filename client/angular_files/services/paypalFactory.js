(function () {
  'use strict'

  angular
    .module('myApp')
    .factory('rateFactory', factory)

  function factory ($http) {
    var factory = {}

    factory.newRate = function (eventinfo, callback) {
      $http.post('/rate/new', eventinfo)
        .then(function (returnData) {
          callback(returnData)
        })
    }

    factory.allRates = function (callback) {
      console.log('in allEvents factory')
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