angular.module('starter')
.factory('ChatService', ['$http', '$q', '$log',function ($http, $q, $log) {
  return {

    getSingleUser: function (userId){
      var deferred = $q.defer();

      $http.get('http://yodelappbcjmm.herokuapp.com/singleuser/' + userId)

      .then(function(success){
        deferred.resolve({success: success})
      })

      .catch(function(error){
        deferred.reject(error)
      })
      return deferred.promise;
    }

  }
}])
