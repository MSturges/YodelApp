(function() {
  'use strict';

  angular.module('starter')
  .controller('LoginCtrl', ['$scope', '$state', '$http', '$log','LoginService', '$timeout', function($scope, $state, $http, $log,LoginService, $timeout) {

    $scope.user = {}
    var userObj = $scope.user


    $scope.landingImage = function(){

      $scope.landing = 1;

      $timeout(function(){
        console.log('switch');
        $scope.landing = 0;
      }, 2000)

    }()

    $scope.login = function() {
      $log.info('login clicked')
      LoginService.login(userObj)

      .then(function(success){
        $log.info('success: ',success);
        localStorage.setItem('Token',success.data.token)
        localStorage.setItem('currentUser', success.data.username)
        localStorage.setItem('currentId', success.data.id)
        $state.go('tabs.home')
      })

      .catch(function(err){
        $log.error(err);
        $state.go('login')
      })
    }

  }])
}());
