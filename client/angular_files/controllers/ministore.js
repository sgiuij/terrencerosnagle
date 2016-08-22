(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('ministoreController', ministoreController)

  function ministoreController (ministoreFactory, $scope, $location) {
    var _this = this
    _this.errors = []

    // $scope.products = [{name:'ray', price:'2.00', quantity: 1}]

    // function getSession () {
    //   userFactory.getSession(function (factoryData) {
    //     _this.user = factoryData.data.userInfo
    //     if (!_this.user) {
    //       $location.url('/')
    //     }
    //   })
    // }
    // getSession()

    // _this.register = function () {
    //   _this.errors = []
    //   console.log('1111111111111111111')
    //   userFactory.register(_this.regInfo, function (factoryData) {
    //     if (factoryData.data.status) {
    //       _this.user = factoryData.data.userInfo
    //       $location.url('/success')
    //     } else {
    //       _this.errors = factoryData.data.errors
    //     }
    //   })
    // }

    _this.allProducts = function () {
      _this.errors = []
      ministoreFactory.allProducts(function (factoryData) {
        // console.log(factoryData)
        if (factoryData.data.errors) {
           _this.errors = factoryData.data.errors
        } else {
          _this.products = factoryData.data.products
        }
      })
    }
    _this.allProducts()

    _this.deleteProduct = function(id){
      _this.errors = []
      ministoreFactory.deleteProduct(id, function (factoryData) {
        if (factoryData.data.status) {
          _this.allProducts()
        } else {
          _this.errors = factoryData.data.errors
        }
      })
    }

    _this.newProduct = function () {
      _this.errors = []
      ministoreFactory.newProduct(_this.prodinfo, function (factoryData) {
        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors
        } else {
          _this.allProducts()
        }
      })
    }

    _this.allCustomers = function () {
      _this.errors = []
      ministoreFactory.allCustomers(function (factoryData) {
        if (factoryData.data.error) {
          _this.errors = factoryData.data.errors
        } else {
          console.log(factoryData)
          _this.customers = factoryData.data.customers
        }
      })
    }
    _this.allCustomers()

    _this.newCustomer = function () {
      _this.errors = []
      console.log(_this.custinfo)
      ministoreFactory.newCustomer(_this.custinfo, function (factoryData) {
        if (factoryData.data.errors) {
          _this.user = factoryData.data.errors
        } else {
          _this.allCustomers()
        }
      })
    }

    _this.deleteCustomer = function(id){
      _this.errors = []
      ministoreFactory.deleteCustomer(id, function (factoryData) {
        if (factoryData.data.status) {
          _this.allCustomers()
        } else {
          _this.errors = factoryData.data.errors
        }
      })
    }

    _this.newOrder = function(){
      
      _this.errors = []
      ministoreFactory.newOrder(_this.orderinfo, function (factoryData) {

        if (factoryData.data.errors) {
          _this.errors = factoryData.data.errors
        } else {
          _this.allOrders()
        }
      })
    }

    _this.allOrders = function(){
      _this.errors = []
      ministoreFactory.allOrders(function (factoryData) {
        if (factoryData.data.error) {
          _this.errors = factoryData.errors    
        } else {
          _this.orders = factoryData.data.orders
        }
      })
    }
    _this.allOrders()
  
 
}})()