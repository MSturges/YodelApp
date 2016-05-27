(function() {
  angular.module('starter')
  .controller('HomeCtrl', function($scope, $log, HomeService, $cordovaGeolocation, $rootScope, $state, localStorageService) {
    $rootScope.currentUser = {}
    $rootScope.currentUser.username = localStorage.getItem('currentUser');
    $rootScope.currentUser.id = localStorage.getItem('currentId');
    $log.info('currentUser',$rootScope.currentUser)
    $scope.doItLive = function() {

      var posOptions = {
        timeout: 10000,
        enableHighAccuracy: false
      };

      $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function(position) {
        $scope.newLocation = {};
        $scope.newLocation.id = $rootScope.currentUser.id
        $scope.newLocation.long = position.coords.longitude;
        $scope.newLocation.lat = position.coords.latitude;
        var newLocation = $scope.newLocation;
        return newLocation
      })
      .then(function(newLocation) {
        HomeService.goActive(newLocation)
        .then(function(results) {
          results.data.forEach(function(element) {
            element.distance = (Math.acos(Math.sin($scope.newLocation.lat * Math.PI / 180) * Math.sin(element.lat * Math.PI / 180) + Math.cos($scope.newLocation.lat * Math.PI / 180) * Math.cos(element.lat * Math.PI / 180) * Math.cos((element.long * Math.PI / 180) - ($scope.newLocation.long * Math.PI / 180))) * 3959)
          })
          $scope.usersInRange = results.data;
        })
      })
    }

    $scope.drag = function(rangeValue){
      $scope.rangeValue = rangeValue
    }

    $scope.rangeValue = 30;
    $scope.lessThan = function(input) {
      if ((input * 10) < $scope.rangeValue){
        return true
      } else {
        return false
      }
    }






    // var me = this;
    //
    //       me.current_room = localStorageService.get('room');
    //       me.rooms = ['Coding', 'Art', 'Writing', 'Travel', 'Business', 'Photography'];
    //
    //       $scope.login = function(username){
    //           localStorageService.set('username', username);
    //           $state.go('rooms');
    //       };
    //
    //       $scope.enterRoom = function(room_name){
    //
    //           me.current_room = room_name;
    //           localStorageService.set('room', room_name);
    //
    //           var room = {
    //               'room_name': room_name
    //           };
    //
    //           SocketService.emit('join:room', room);
    //
    //           $state.go('room');
    //       };
    //
    //   }







  })

}());
