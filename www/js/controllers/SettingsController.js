(function() {
  'use strict';

  angular.module('starter')
  .controller('SettingsCtrl', ['$scope', '$state', '$http', '$log','LoginService', 'SignUpService','SettingsService',function($scope, $state, $http, $log, LoginService, SignUpService, SettingsService) {



    $scope.logout = function() {
      localStorage.clear()
      $state.go('login')
    }

    $scope.interests = {};

    $scope.interests.body = function(){
      SettingsService.retrieveInterests().then(function(results){
        console.log('results: ', results.data)
        $scope.interests.body = results.data
      })
    }();

    var settingsObj = $scope.interests

    $scope.submit = function(){
      console.log(settingsObj);
      SettingsService.updateInterests(settingsObj)
    }

  }])
}());
