(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('paypalController', paypalController)
    //Q1:modularized controller, why is allEvent still running everywhere
    //why do we use _this instead of this
  function paypalController (paypalFactory, $scope, $location) {
    var _this = this
    _this.errors = []

    _this.allRates = function () {
      _this.errors = []
      paypalFactory.allRates(function (factoryData) {
        console.log('in allEvents front end controller')
        if (factoryData.data.errors) {
           _this.errors = factoryData.data.errors
        } else {
          _this.rates = factoryData.data.rates
        }
      })
    }
    _this.allRates()

    _this.newRate = function () {
      _this.errors = []
      paypalFactory.newRate(_this.rateinfo, function (factoryData) {
        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors
        } else {
          _this.allRate()
        }
      })
    }

    _this.deleteRate = function(id){
      _this.errors = []
      paypalFactory.deleteRate(id, function (factoryData) {
        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors 
        } else {
          _this.allRates()
        }
      })
    }

 
}})()