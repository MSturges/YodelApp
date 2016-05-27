angular.module('starter')
.factory('SettingsService', function ($http, $q, $log) {

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

    retrieveInterests: function(id){
      var deferred = $q.defer();
      $http.get('http://yodelappbcjmm.herokuapp.com/settingsretrieve/'+id)
      .then(function(success){
        console.log('success: ', success)
        deferred.resolve(success)
      })
      .catch(function(error){
        deferred.reject(error)
      })
      return deferred.promise;
    }
  }
})
