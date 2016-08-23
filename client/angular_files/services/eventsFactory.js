(function () {
  'use strict'

  angular
    .module('myApp')
    .factory('eventsController', factory)

  function factory ($http) {
    var factory = {}

    factory.getSession = function (callback) {
      $http.get('/session')
        .then(function (returnData) {
          callback(returnData)
        })
    }

    factory.newEvent = function (eventinfo, callback) {
      $http.post('/event/new', productInfo)
        .then(function (returnData) {
          callback(returnData)
        })
    }

    factory.allEvents = function (callback) {
      $http.get('/events')
        .then(function (returnData) {
            callback(returnData)
        })
    }

    factory.deleteEvent = function (eventId, callback) {
      $http.post('/event/'+eventId)
        .then(function (returnData) {
            callback(returnData)
        })
    }

    return factory
  
}})()