angular.module('starter')

.factory('TabService', function ($http, $p, $log, ngAudio) {
  $scope.sound = ngAudio.load('http://www.archive.org/download/SwissYodelCall/Track17_64kb.m3u');
  play('http://www.archive.org/download/SwissYodelCall/Track17_64kb.mp3')
  return {
    go: function (userObj){
      var deferred = $q.defer();
      ngAudio.play($scope.sound)
      .then(function(){
        $http.post('http://yodelappbcjmm.herokuapp.com/login',userObj)
        .then(function(success){
          deferred.resolve(success)
        })
        .catch(function(error){
          deferred.reject(error)
        })
        return deferred.promise;
      })

    }
  }
})
