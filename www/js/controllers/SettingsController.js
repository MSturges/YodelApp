(function() {
  'use strict';

  angular.module('starter')
  .controller('SettingsCtrl', ['$scope', '$state', '$http', '$log','LoginService', 'SignUpService',function($scope, $state, $http, $log, LoginService, SignUpService) {

    $scope.logout = function() {
      localStorage.clear()
      $state.go('login')
    }

    $scope.interests = {};
    var settingsObj = $scope.interests

    $scope.submit = function(){
      console.log(settingsObj);
      SignUpService.updateInterests(settingsObj)
    }

  }])
}());
