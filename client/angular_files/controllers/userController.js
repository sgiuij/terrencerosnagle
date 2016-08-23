(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('restController', restController)

    
  function userController (userFactory, $scope, $location) {
    var _this = this
    _this.errors = []

    _this.allUsers = function () {
      _this.errors = []
      userFactory.allUsers(function (factoryData) {
        if (factoryData.data.errors) {
           _this.errors = factoryData.data.errors
        } else {
          _this.users = factoryData.data.users
        }
      })
    }
    _this.allUsers()

    _this.deleteUser = function(id){
      _this.errors = []
      userFactory.deleteUser(id, function (factoryData) {
        if (factoryData.data.status) {
          _this.allUsers()
        } else {
          _this.errors = factoryData.data.errors
        }
      })
    }

    _this.deactivateUser = function(id){
      _this.errors = []
      userFactory.deactivateUser(id, function (factoryData) {
        if (factoryData.data.status) {
          _this.allUsers()
        } else {
          _this.errors = factoryData.data.errors
        }
      })
    }

    _this.activateUser = function(id){
      _this.errors = []
      userFactory.activateUser(id, function (factoryData) {
        if (factoryData.data.status) {
          _this.allUsers()
        } else {
          _this.errors = factoryData.data.errors
        }
      })
    }
    _this.newUser = function () {
      _this.errors = []
      userFactory.newUser(_this.prodinfo, function (factoryData) {
        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors
        } else {
          _this.allUsers()
        }
      })
    }
 
}})()