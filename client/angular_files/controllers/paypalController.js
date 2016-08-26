(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('paypalController', paypalController)

  function paypalController (paypalFactory, $scope, $location) {
    var _this = this
    _this.errors = []

    _this.allRates = function () {
      console.log('paypalController allRates')
      _this.errors = []
      paypalFactory.allRates(function (factoryData) {
        
        if (factoryData.data.errors) {
           _this.errors = factoryData.data.errors
        } else {
          console.log('in allRates front end controller')
          _this.rates = factoryData.data.rates
        }
      })
    }
    _this.allRates()

    _this.newRate = function () {
      console.log('newrate')
      _this.errors = []
      paypalFactory.newRate(_this.ratesinfo, function (factoryData) {
        if (factoryData.data.errors) {
          console.log('newRate controller error')
          _this.errors = factoryData.data.errors
        } else {
          
          _this.allRates()
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