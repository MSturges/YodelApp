(function() {
  'use strict';

  angular.module('starter')
  .controller('ChatCtrl', ['$scope', '$state', '$http', '$log','LoginService',function($scope, $state, $http, $log,LoginService) {

    $scope.currentUserId = function() {
      // console.log($stateParams);
    }

  }])
}());
