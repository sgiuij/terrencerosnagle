(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('eventController', eventController)
    //Q1:
  function eventController (eventFactory, $scope, $location) {
    var _this = this
    _this.errors = []

    _this.allEvents = function () {
      _this.errors = []
      eventFactory.allEvents(function (factoryData) {
        console.log('in allEvents front end controller')
        if (factoryData.data.errors) {
           _this.errors = factoryData.data.errors
        } else {
          _this.events = factoryData.data.events
        }
      })
    }
    _this.allEvents()

    _this.newEvent = function () {
      _this.errors = []
      eventFactory.newEvent(_this.eventinfo, function (factoryData) {
        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors
        } else {
          _this.allEvents()
        }
      })
    }

    _this.deleteEvent = function(id){
      _this.errors = []
      eventFactory.deleteEvent(id, function (factoryData) {
        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors 
        } else {
          _this.allEvents()
        }
      })
    }

    _this.thisEvent = function (id) {
      _this.errors = []
      eventFactory.thisEvent(id, function (factoryData) {
        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors
        } else {
          _this.allEvents()
        }
      })
    }

 
}})()