(function() {

  angular.module('starter')

  .controller('TabsCtrl', function(ionic, TabService){

    $scope.doItLive = function (){
      TabService.go()
      .then(function(success){
        $state.go('tabs.home')

      })
      .catch(function(error){
        $state.go('tabs.home')
      })
    }

  })

}());
