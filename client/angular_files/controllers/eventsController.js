(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('eventController', eventController)

  
    
  function eventController (eventsFactory, $scope, $location) {
    var _this = this
    _this.errors = []

    function getsession () {
      pollsFactory.getSession(function (factoryData) {
        console.log('***************')
        console.log(factoryData.data)
        _this.user = factoryData.data.userInfo
        if (!_this.user) {
          $location.url('/')
        }
      })
    }
    getsession()

    _this.allEvents = function () {
      _this.errors = []
      eventsFactory.allEvents(function (factoryData) {

        if (factoryData.data.errors) {
           _this.errors = factoryData.data.errors
        } else {
          _this.blogs = factoryData.data.blogs
        }
      })
    }
    _this.allEvents()

    _this.deleteEvent = function(id){
      _this.errors = []
      eventsFactory.deleteEvent(id, function (factoryData) {
        if (factoryData.data.status) {
          _this.allEvents()
        } else {
          _this.errors = factoryData.data.errors
        }
      })
    }

    _this.thisEvent = function (id) {
      _this.errors = []
      eventsFactory.thisEvent(id, function (factoryData) {
        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors
        } else {
          _this.allEvents()
        }
      })
    }

 
}})()