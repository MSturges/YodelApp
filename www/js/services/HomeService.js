angular.module('starter')
.factory('HomeService', ['$http', '$q', '$log',function ($http, $q, $log) {
  return {

    goActive: function (newLocation){
      var deferred = $q.defer();

      

      $http.get('http://yodelappbcjmm.herokuapp.com/goactive', newLocation)

      .then(function(success){
        console.log(success);
        deferred.resolve(success)
      })

      .catch(function(error){
        deferred.reject(error)
      })
      return deferred.promise;
    },

  }
}])
