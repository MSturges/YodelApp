(function() {
  'use strict';

  angular.module('starter')
  .controller('ChatCtrl', ['$scope', '$state', '$http', '$log','$stateParams', 'localStorageService', 'ChatService', function($scope, $state, $http, $log, $stateParams, localStorageService, ChatService) {

    $scope.selectedUserId = $stateParams.userId;



    ChatService.getSingleUser($scope.selectedUserId)
    .then(function(singleUser){
      console.log(singleUser);
      console.log('user:' + singleUser.success.data.username);
      $scope.singleUser = singleUser.success.data;
    })


    var you = $scope.selectedUserId;
    var me = this;

    me.current_room = you + 'chat' + localStorage.getItem('currentId')

    me.rooms = [];

    var room_name = localStorage.getItem('currentId')

    $scope.enterRoom = function(room_name){
      me.current_room = room_name;
      localStorageService.set('room', room_name);
      var room = {
        'room_name': room_name
      };
      SocketService.emit('join:room', room);
      $state.go('room');
    };







  }])
}());
