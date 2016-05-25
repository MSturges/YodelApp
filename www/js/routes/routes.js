angular.module('starter')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'SignUpCtrl'
  })

  .state('tabs.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tabs-home.html',
        controller: 'HomeCtrl'
      }
    },
    protected: true,
    resolve: {
      currentUser: function($http,$log,$state) {
        if(localStorage.getItem('Token')) {
          // $log.info('checking for token....')
          const config = {
            headers: {
              authorization: 'Bearer ' + localStorage.getItem('Token')
            }
          }
          return $http.get('http://yodelappbcjmm.herokuapp.com/me',config)
          .then(function(response) {
            // $log.info('from the resolve:',response)
            // $log.info(response.data)
            return response.data
            $state.go('tab.home')
          })
          .catch(function () {
            $log.info('there was an error')
            localStorage.clear();
            // $state.go('signin')
            return null;
          })
        }
      }
    }
  })

  .state('tabs.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  .state('tabs', {
    url: '/tabs',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'HomeCtrl'
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
})
