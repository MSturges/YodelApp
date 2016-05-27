(function() {
  'use strict';

  angular.module('starter')
  .controller('ChatCtrl', ['$scope', '$state', '$http', '$log','$stateParams', 'localStorageService', 'ChatService', 'SocketService', 'moment', '$ionicScrollDelegate', function($scope, $state, $http, $log, $stateParams, localStorageService, ChatService, SocketService, moment, $ionicScrollDelegate) {

    $scope.selectedUserId = $stateParams.userId;

    ChatService.getSingleUser($scope.selectedUserId)
    .then(function(singleUser){
      $scope.singleUser = singleUser.success.data;
    })

    $scope.you = $scope.selectedUserId;
    $scope.me = this;
    console.log(this);

    $scope.me.current_room = $scope.you + 'chat' + localStorage.getItem('currentId')

    $scope.me.rooms = [];

    var room_name = $scope.me.current_room;
    $scope.thisRoom = room_name;

    $scope.enterRoom = function(){
      $scope.me.current_room = room_name;
      localStorageService.set('room', room_name);

      $scope.room = {
        'room_name': room_name
      };

      SocketService.emit('join:room', $scope.room);

    }();


    $scope.humanize = function(timestamp){
      return moment(timestamp).fromNow();
    };

    $scope.me.current_room = localStorage.getItem('room');
    console.log(localStorageService.get('room'));

    $scope.current_user = localStorage.getItem('currentUser');

    $scope.isNotCurrentUser = function(user){
      if($scope.current_user != user){
        return 'not-current-user';
      }
      return 'current-user';
    };

    $scope.me.messages = [];
    $scope.sendTextMessage = function(){

      var msg = {
        'room': $scope.me.current_room,
        'user': $scope.current_user,
        'text': $scope.me.message,
        'time': moment()
      };

      console.log(msg);

      $scope.me.messages.push(msg);
      $ionicScrollDelegate.scrollBottom();

      $scope.me.message = '';

      SocketService.emit('send:message', msg);
    };


    $scope.leaveRoom = function(){
      $scope.msg = {
        'user': $scope.current_user,
        'room': $scope.me.current_room,
        'time': moment()
      };

      SocketService.emit('leave:room', msg);
      $state.go('rooms');

    };


    SocketService.on('message', function(msg){
      $scope.me.messages.push(msg);
      $ionicScrollDelegate.scrollBottom();
    });



  }])
}());
