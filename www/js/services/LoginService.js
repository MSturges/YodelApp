angular.module('starter')
.factory('LoginService', ['$http', '$q', '$log',function ($http, $q, $log) {
  return {

    login: function (userObj){
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
}])
