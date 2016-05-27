angular.module('starter')
.factory('SignUpService', function ($http, $q, $log) {

return {

    updateInterests: function (settingsObj){
      console.log('In service: ', settingsObj)
      var deferred = $q.defer();
      $http.post('http://yodelappbcjmm.herokuapp.com/settingsupdate', settingsObj)
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
