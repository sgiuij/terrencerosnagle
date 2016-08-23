(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('adminController', adminController)

  function adminController (adminFactory, $scope, $location) {
    var _this = this
    _this.errors = []

    

    _this.register = function () {
      _this.errors = []
      userFactory.register(_this.regInfo, function (factoryData) {
        if (factoryData.data.status) {
          _this.user = factoryData.data.userInfo
          $location.url('/success')
        } else {
          _this.errors = factoryData.data.errors
        }
      })
    }
    _this.login = function () {
      _this.errors = []
      userFactory.login(_this.logInfo, function (factoryData) {
        if (factoryData.data.status) {
          _this.user = factoryData.data.userInfo
          $location.url('/success')
        } else {
          _this.errors = factoryData.data.errors
        }
      })
    }
    _this.logout = function () {
      userFactory.logout(function (factoryData) {
        if (factoryData.data.status) {
          $location.url('/')
        } else {
          _this.errors = factoryData.data.errors
        }
      })
    }

}})()