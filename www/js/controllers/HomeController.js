(function() {
  angular.module('starter')

  .controller('HomeCtrl', function($scope, $log, theUser){
    $log.info('currentuser====',theUser)
    $scope.doItLive = function() {
      console.log('live bitchessssss');
      $log.info('hi');
    }
  })

}());
