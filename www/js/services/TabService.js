angular.module('starter')

.factory('TabService', function ($http, $p, $log) {
  return {
    go: function (userObj){
      var deferred = $q.defer();
      $http.post('http://yodelappbcjmm.herokuapp.com/login',userObj)
      .then(function(success){
        deferred.resolve(success)
      })
      .catch(function(error){
        deferred.reject(error)
      })
      return deferred.promise;
    },
  }
})
