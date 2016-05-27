(function() {

  angular.module('starter')

  .controller('TabsCtrl', function(ionic, TabService,ngAudio,$log){
    // $scope.sound = ngAudio.load('http://www.archive.org/download/SwissYodelCall/Track17_64kb.mp3');
    // play('http://www.archive.org/download/SwissYodelCall/Track17_64kb.mp3')
    //
    // $scope.playSound = function() {
    //   return ngAudio.play($scope.sound)
    // }
    // ngAudio.play('http://www.archive.org/download/SwissYodelCall/Track17_64kb.mp3')
    $scope.doItLive = function (){
      TabService.go()
      .then(function(success){
        // $log.info('button clickeD!');
        $state.go('tabs.home')
      })
      .catch(function(error){
        $state.go('tabs.home')
      })
    }

  })

}());
