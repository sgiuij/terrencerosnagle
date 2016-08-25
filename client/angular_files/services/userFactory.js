(function () {
  'use strict'

  angular
    .module('myApp')
    .factory('userFactory', factory)

  function factory ($http) {
    var factory = {}

   factory.newUser = function (userinfo, callback) {
      $http.post('/users/new', userinfo)
        .then(function (returnData) {
          callback(returnData)
        })
    }

    factory.allUser = function (callback) {
      $http.get('/users')
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.deactivateUser = function (userinfo, callback) {
      $http.post('/users/'+userinfo)
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.activateUser = function (userinfo, callback) {
      $http.post('/users/'+userinfo)
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.deleteUser = function (userinfo, callback) {
      $http.post('/users/'+userinfo)
        .then(function (returnData) {
            callback(returnData)
        })
    }
    return factory
  
}})()