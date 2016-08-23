(function () {
  'use strict'

  angular
    .module('myApp')
    .factory('contentFactory', factory)

  function factory ($http) {
    var factory = {}

    factory.getall = function (callback) {
      $http.get('/bio')
        .then(function (returnData) {
            callback(returnData)
        })
    }

    return factory
  
}})()