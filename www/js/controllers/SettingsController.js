(function() {
  'use strict';

  angular.module('starter')
  .controller('SettingsCtrl', ['$scope', '$state', '$http', '$log','LoginService', 'SignUpService','SettingsService','$rootScope',function($scope, $state, $http, $log, LoginService, SignUpService, SettingsService,$rootScope) {
    $scope.logout = function() {
      localStorage.clear()
      $rootScope.currentUser = {}
      $state.go('login')
    }
    $scope.interests = {};
    $scope.interests.id = $rootScope.currentUser.id

    $scope.interests.body = function(){
      SettingsService.retrieveInterests($scope.interests.id).then(function(results){
        console.log('results: ', results.data)
        $scope.interests.body = results.data
      })
    }();

    var settingsObj = $scope.interests

    $scope.submit = function(){
      console.log(settingsObj);
      SettingsService.updateInterests(settingsObj)
      $state.go('tabs.home')
    }

  }])
}());
