angular.module('starter')
.factory('SignUpService', function ($http, $q, $log) {

  return {

    signUp: function (userObj){
      var deferred = $q.defer();
      $http.post('http://yodelappbcjmm.herokuapp.com/settings', userObj)
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
