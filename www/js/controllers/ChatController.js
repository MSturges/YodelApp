(function() {
  'use strict';

  angular.module('starter')
  .controller('ChatCtrl', ['$scope', '$state', '$http', '$log','$stateParams',function($scope, $state, $http, $log, $stateParams) {

    $scope.currentUserId = $stateParams.userId;
    console.log($stateParams.userId);

  }])
}());
