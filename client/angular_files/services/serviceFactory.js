(function () {
  'use strict'

  angular
    .module('myApp')
    .factory('serviceFactory', factory)

  function factory ($http) {
    var factory = {}

    factory.getService = function (callback) {
      $http.get('/service')
        .then(function (returnData) {
            callback(returnData)
        })
    }

    // factory.deleteService = function (sinfo, callback) {
    //   console.log('*****deleteService factory*****')
    //   console.log(sinfo.id)
  
    //   $http.post('/service/'+sinfo.id,sinfo.link)
    //     .then(function (returnData) {
    //       console.log('*****deleteService factory*****')
    //         callback(returnData)
    //     })
    // }

    factory.deleteService = function (sinfo, callback) {
      console.log('*****deleteService factory*****')
  
      $http.post('/service/delete', sinfo)
        .then(function (returnData) {
          console.log('*****indide deleteService factory*****')
            callback(returnData)
        })
    }

    factory.newService = function (serviceinfo,callback) {
      $http.post('/service/new',serviceinfo)
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.allSample = function (callback) {
      $http.get('/sample')
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.deleteSample = function (id, callback) {
      $http.post('/sample/'+id)
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.newSample = function (callback) {
      $http.post('/sample/new')
        .then(function (returnData) {
            callback(returnData)
        })
    }


    return factory
  
}})()