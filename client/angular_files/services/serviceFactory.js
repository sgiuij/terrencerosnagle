(function () {
  'use strict'

  angular
    .module('myApp')
    .factory('serviceFactory', factory)

  function factory ($http) {
    var factory = {}

    factory.getService = function (callback) {
      $http.get('/content')
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.deleteService = function (id, callback) {
      $http.post('/content/'+id)
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.newService = function (callback) {
      $http.post('/content/new')
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.allSample = function (callback) {
      $http.get('/audio')
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.deleteSample = function (id, callback) {
      $http.post('/audio/'+id)
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.newSample = function (callback) {
      $http.post('/audio/new')
        .then(function (returnData) {
            callback(returnData)
        })
    }


    return factory
  
}})()