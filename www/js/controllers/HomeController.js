(function() {
  angular.module('starter')
  .controller('HomeCtrl', function($scope, $log, HomeService, $cordovaGeolocation, currentUser){
    $log.info('currentuser====',currentUser)
    $scope.currentUser = currentUser
    $scope.doItLive = function() {

      var posOptions = {
        timeout: 10000, enableHighAccuracy: false
      };

      $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        $scope.newLocation = {};
        $scope.newLocation.long = position.coords.longitude;
        $scope.newLocation.lat = position.coords.latitude;
        var newLocation = $scope.newLocation;
        console.log(newLocation);
        return newLocation
      })
      .then(function(newLocation){
        HomeService.goActive(newLocation)
        .then(function(result){
          $scope.usersInRange = result.data;
          console.log(result.data);
        })
      })
    }
  })

}());
