(function() {
  'use strict';

  angular.module('starter')
  .controller('SettingsCtrl', ['$scope', '$state', '$http', '$log','LoginService','$rootScope',function($scope, $state, $http, $log,LoginService,$rootScope) {

    $scope.logout = function() {
      localStorage.clear()
      $rootScope.currentUser = {}
      $state.go('login')
    }

  }])
}());
