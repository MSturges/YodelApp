(function() {
  angular.module('starter')

  .controller('HomeCtrl', function($scope, $log){

    $scope.doItLive = function() {
      console.log('live bitchessssss');
      $log.info('hi');
    }
  })

}());
