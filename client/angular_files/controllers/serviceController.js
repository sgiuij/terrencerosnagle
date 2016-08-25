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

          _this.services = factoryData.data.ser
           console.log(_this.services)
        }
      })
    }
    _this.getService()

    _this.newService = function () {
      _this.errors = []
      serviceFactory.newService(_this.serviceinfo, function (factoryData) {
        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors
        } else {
          _this.getService()
        }
      })
    }

    _this.deleteService = function(link,id){
      _this.errors = []
      var sinfo={link:link,id:id}
      serviceFactory.deleteService(sinfo, function (factoryData) {
        console.log('deleteservice controller call back function')
        console.log(sinfo)
        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors 
        } else {
          _this.getService()
        }
      })
    }

 
 
}})()