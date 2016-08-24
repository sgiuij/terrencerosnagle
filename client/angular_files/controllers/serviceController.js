(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('serviceController', serviceController)

    
  function serviceController (serviceFactory, $scope, $location) {
    var _this = this
    _this.errors = []

    _this.getService = function () {
      _this.errors = []
      serviceFactory.getService(function (factoryData) {
        if (factoryData.data.errors) {
           _this.errors = factoryData.data.errors
        } else {
          _this.service = factoryData.data.service
        }
      })
    }
    _this.getService()

    _this.newService = function () {
      _this.errors = []
      serviceFactory.newService(_this.eventinfo, function (factoryData) {
        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors
        } else {
          _this.getService()
        }
      })
    }

    _this.deleteService = function(id){
      _this.errors = []
      serviceFactory.deleteService(id, function (factoryData) {
        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors 
        } else {
          _this.getService()
        }
      })
    }

 
 
}})()