angular.module('starter')
.factory('HomeService', ['$http', '$q', '$log',function ($http, $q, $log) {
  return {

    goActive: function (newLocation){
      var deferred = $q.defer();

      var currentUser = localStorage.getItem('Token')

      var activeLocation = {
        currentUser: currentUser,
        lat: newLocation.lat,
        long: newLocation.long,
        active: true
      }


      $http.post('http://yodelappbcjmm.herokuapp.com/goactive', activeLocation)

      .then(function(success){
        deferred.resolve(success)
      })

      .catch(function(error){
        deferred.reject(error)
      })
      return deferred.promise;
    }

  }
}])
