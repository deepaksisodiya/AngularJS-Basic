/**
 * Created by deepaksisodiya on 23/09/15.
 */

var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/view1');
    $stateProvider
        .state('view 1', {
            url : '/view1',
            templateUrl : './view1.html',
            controller : "customerController1"
        })
        .state('view 2', {
            url : '/view2',
            templateUrl : './view2.html',
            controller : "customerController2"
        })
});

app.factory('customerService', function () {
   var factory = {};
   var customers = [
       { name : "Chetan", city : "Pune"},
       { name : "Deepak", city : "Pune"},
       { name : "Narendra", city : "Delhi"},
       { name : "Piyush", city : "Bhopal"}
   ];
   factory.getCustomer = function () {
       return customers;
   };
   return factory;
});

app.controller('customerController1', ['$scope', 'customerService', function($scope, customerService) {
    $scope.customers = customerService.getCustomer();
}]);

app.controller('customerController2', ['$scope', 'customerService', function($scope, customerService) {
    $scope.customers = customerService.getCustomer();
}]);