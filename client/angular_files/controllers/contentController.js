(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('contentController', contentController)

    
  function contentController (contentFactory, $scope, $location) {
    var _this = this
    _this.errors = []

    _this.getBio = function () {
      _this.errors = []
      contentFactory.getBio(function (factoryData) {
        if (factoryData.data.errors) {
           _this.errors = factoryData.data.errors
        } else {
          _this.bio = factoryData.data.bio
        }
      })
    }
    _this.getBio()

    _this.getLesson = function () {
      _this.errors = []
      contentFactory.getLesson(function (factoryData) {
        if (factoryData.data.errors) {
           _this.errors = factoryData.data.errors
        } else {
          _this.lesson = factoryData.data.lesson
        }
      })
    }
    _this.getLesson()

    _this.getBooking = function () {
      _this.errors = []
      contentFactory.getBooking(function (factoryData) {
        if (factoryData.data.errors) {
           _this.errors = factoryData.data.errors
        } else {
          _this.booking = factoryData.data.booking
        }
      })
    }
    _this.getBooking()

    _this.newBio = function () {
      _this.errors = []
      eventFactory.newBio(_this.eventinfo, function (factoryData) {
        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors
        } else {
          _this.getBio()
        }
      })
    }

    _this.newLesson = function () {
      _this.errors = []
      eventFactory.newLesson(_this.eventinfo, function (factoryData) {
        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors
        } else {
          _this.getLesson()
        }
      })
    }

    _this.newBooking = function () {
      _this.errors = []
      eventFactory.newBooking(_this.eventinfo, function (factoryData) {
        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors
        } else {
          _this.getBooking()
        }
      })
    }

    _this.getBio = function () {
      _this.errors = []
      contentFactory.getBio(function (factoryData) {
        if (factoryData.data.errors) {
           _this.errors = factoryData.data.errors
        } else {
          _this.bio = factoryData.data.bio
        }
      })
    }
    _this.getBio()

    _this.getBio = function () {
      _this.errors = []
      contentFactory.getBio(function (factoryData) {
        if (factoryData.data.errors) {
           _this.errors = factoryData.data.errors
        } else {
          _this.bio = factoryData.data.bio
        }
      })
    }
    _this.getBio()

    _this.getBio = function () {
      _this.errors = []
      contentFactory.getBio(function (factoryData) {
        if (factoryData.data.errors) {
           _this.errors = factoryData.data.errors
        } else {
          _this.bio = factoryData.data.bio
        }
      })
    }
    _this.getBio()

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
 
}})()