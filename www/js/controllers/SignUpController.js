(function() {

  angular.module('starter')
  .controller('SignUpCtrl', function($scope, $state, $http, $log, $q, SignUpService) {

    $scope.user = {}
    var userObj = $scope.user

    $scope.signUp = function() {
      SignUpService.signUp(userObj)

      .then(function(success){
        $log.info(success);
        // $scope.user = null;
        localStorage.setItem('Token', success.data.token);
        localStorage.setItem('currentUser', success.data.username)
        localStorage.setItem('currentId', success.data.id)
        $state.go('tabs.home')
      })

      .catch(function(err){
        $log.error('there was an error in the catch',err);
        $state.go('login')
      })
    }
  })
}());
