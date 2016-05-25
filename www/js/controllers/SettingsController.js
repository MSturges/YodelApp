(function() {
  'use strict';

  angular.module('starter')
  .controller('SettingsCtrl', ['$scope', '$state', '$http', '$log','LoginService',function($scope, $state, $http, $log,LoginService) {

    $scope.logout = function() {
      localStorage.clear()
      $state.go('login')
    }

  }])
}());
