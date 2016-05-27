(function() {
  'use strict';

  angular.module('starter')
  .controller('ChatCtrl', ['$scope', '$state', '$http', '$log','$stateParams', 'localStorageService', 'ChatService', 'SocketService', 'moment', '$ionicScrollDelegate', function($scope, $state, $http, $log, $stateParams, localStorageService, ChatService, SocketService, moment, $ionicScrollDelegate) {

    $scope.selectedUserId = $stateParams.userId;

    ChatService.getSingleUser($scope.selectedUserId)
    .then(function(singleUser){
      $scope.singleUser = singleUser.success.data;
    })

    // var you = $scope.selectedUserId;
    // var me = this;
    //
    // me.current_room = you + 'chat' + localStorage.getItem('currentId')
    // console.log(me.current_room);
    //
    // me.rooms = [];
    //
    // var room_name = me.current_room;
    //
    //
    // $scope.enterRoom = function(room_name){
    //   console.log('room');
    //   me.current_room = room_name;
    //   localStorageService.set('room', room_name);
    //
    //   var room = {
    //     'room_name': room_name
    //   };
    //
    //   SocketService.emit('join:room', room);
    //
    // }();
    //
    // me.messages = [];
    //
    // $scope.humanize = function(timestamp){
    //   return moment(timestamp).fromNow();
    // };
    //
    // me.current_room = localStorageService.get('room');
    //
    // var current_user = localStorageService.get('currentUser');
    //
    // $scope.isNotCurrentUser = function(user){
    //   if(current_user != user){
    //     return 'not-current-user';
    //   }
    //   return 'current-user';
    // };
    //
    // $scope.sendTextMessage = function(){
    //
    //   var msg = {
    //     'room': me.current_room,
    //     'user': current_user,
    //     'text': me.message,
    //     'time': moment()
    //   };
    //
    //   me.messages.push(msg);
    //   $ionicScrollDelegate.scrollBottom();
    //
    //   me.message = '';
    //
    //   SocketService.emit('send:message', msg);
    // };
    //
    //
    //
    //
    // $scope.leaveRoom = function(){
    //   var msg = {
    //     'user': current_user,
    //     'room': me.current_room,
    //     'time': moment()
    //   };
    //
    //   SocketService.emit('leave:room', msg);
    //   $state.go('rooms');
    //
    // };
    //
    //
    // SocketService.on('message', function(msg){
    //   me.messages.push(msg);
    //   $ionicScrollDelegate.scrollBottom();
    // });
    //


  }])
}());
