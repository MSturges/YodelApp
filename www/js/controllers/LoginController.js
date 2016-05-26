(function() {
  'use strict';

  angular.module('starter')
  .controller('LoginCtrl', ['$scope', '$state', '$http', '$log','LoginService',function($scope, $state, $http, $log,LoginService) {

    $scope.user = {}
    var userObj = $scope.user

    $scope.login = function() {
      $log.info('login clicked')
      LoginService.login(userObj)

      .then(function(success){
        $log.info(success);
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
