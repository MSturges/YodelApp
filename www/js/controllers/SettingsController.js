(function() {
  'use strict';

  angular.module('starter')
  .controller('SettingsCtrl', ['$scope', '$state', '$http', '$log','LoginService', 'SignUpService','SettingsService','$rootScope',function($scope, $state, $http, $log, LoginService, SignUpService, SettingsService,$rootScope) {
    $scope.logout = function() {
      localStorage.clear()
      $rootScope.usersInRange=[];
      $state.go('login')
    }
    $scope.interests = {};
    $scope.interests.id = localStorage.getItem('currentId');

    SettingsService.retrieveInterests($scope.interests.id)
    .then(function(results){
      console.log('results: ', results.data)
      $scope.interests.body = results.data;
      return null
    })
    var settingsObj = $scope.interests

    $scope.submit = function(){
      console.log(settingsObj);
      SettingsService.updateInterests(settingsObj)
      $state.go('tabs.home')
    }
  }])
}());
