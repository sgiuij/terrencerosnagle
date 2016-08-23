(function () {
  'use strict'

  angular
    .module('myApp')
    .factory('eventFactory', factory)

  function factory ($http) {
    var factory = {}

    factory.newEvent = function (eventinfo, callback) {
      $http.post('/event/new', eventinfo)
        .then(function (returnData) {
          callback(returnData)
        })
    }

    factory.allEvents = function (callback) {
      console.log('in allEvents factory')
      $http.get('/events')
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.deleteEvent = function (id, callback) {
      $http.post('/event/delete/'+id)
        .then(function (returnData) {
            callback(returnData)
        })
    }

    return factory
  
}})()