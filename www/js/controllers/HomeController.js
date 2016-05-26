(function() {
  angular.module('starter')
    .controller('HomeCtrl', function($scope, $log, HomeService, $cordovaGeolocation, currentUser) {
      $log.info('currentuser====', currentUser)
      $scope.currentUser = currentUser
      $scope.doItLive = function() {

        var posOptions = {
          timeout: 10000,
          enableHighAccuracy: false
        };

        $cordovaGeolocation
          .getCurrentPosition(posOptions)
          .then(function(position) {
            $scope.newLocation = {};
            $scope.newLocation.long = position.coords.longitude;
            $scope.newLocation.lat = position.coords.latitude;
            var newLocation = $scope.newLocation;
            console.log(newLocation);
            return newLocation
          })
          .then(function(newLocation) {
            HomeService.goActive(newLocation)
              .then(function(results) {
                results.data.forEach(function(element) {
                  element.distance = (Math.acos(Math.sin($scope.newLocation.lat * Math.PI / 180) * Math.sin(element.lat * Math.PI / 180) + Math.cos($scope.newLocation.lat * Math.PI / 180) * Math.cos(element.lat * Math.PI / 180) * Math.cos((element.long * Math.PI / 180) - ($scope.newLocation.long * Math.PI / 180))) * 3959)
                })
                $scope.usersInRange = results.data;
                console.log(results.data);
              })
          })
      }

      $scope.drag = function(rangeValue){
        $scope.rangeValue = rangeValue
      }

      $scope.rangeValue = 30;
      $scope.lessThan = function(input) {
        // console.log('input: ' + input);
        // console.log('rangeValue: ' + $scope.rangeValue)
        if ((input * 10) < $scope.rangeValue){
          return true
        } else {
          return false
        }
      }
    })

}());
