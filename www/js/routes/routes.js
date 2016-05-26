(function() {
  'use strict';
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
      protected:true
      // resolve: {
      //   currentUser: function($http,$log,$state) {
      //     if(localStorage.getItem('Token')) {
      //       $log.info('checking for token....')
      //       const config = {
      //         headers: {
      //           authorization: 'Bearer ' + localStorage.getItem('Token')
      //         }
      //       }
      //       return $http.get('http://yodelappbcjmm.herokuapp.com/me',config)
      //       .then(function(response) {
      //         $log.info('from the resolve:',response)
      //         $log.info(response.data)
      //         return response.data
      //         $state.go('tab.home')
      //       })
      //       .catch(function () {
      //         $log.info('there was an error')
      //         localStorage.clear();
      //         $state.go('signin')
      //         return null;
      //       })
      //     }
      //   }
      // }
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

    .state('tabs.chat', {
      url: '/:userId',
      views: {
        'tab-chat': {
          templateUrl: 'templates/tabs-chat.html',
          controller: 'ChatCtrl'
        }
      }
    })


    .state('tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl: 'templates/tabs.html',
      controller: 'HomeCtrl',
      protected:true,
      resolve: {
        currentUser: function($http,$log,$state) {
          if(localStorage.getItem('Token')) {
            $log.info('checking for token....')
            const config = {
              headers: {
                authorization: 'Bearer ' + localStorage.getItem('Token')
              }
            }
            return $http.get('http://yodelappbcjmm.herokuapp.com/me',config)
            .then(function(response) {
              $log.info('from the resolve:',response)
              $log.info(response.data)
              return response.data
              $state.go('tab.home')
            })
            .catch(function () {
              $log.info('there was an error')
              localStorage.clear();
              $state.go('signin')
              return null;
            })
          }
        }
      }
    })
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  })
  // app.run runs once when the app starts
  // this improves user experience
  angular.module('starter').run(function ($rootScope, $location, $window, $log,$state) {
    $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options){
      // event.preventDefault();
      if(toState.protected && !localStorage.getItem('Token')) {
        console.log("requires login dude!!!");
        const LoginError = "Please Login!"
        $state.go('login')
      }
    })
  });
  angular.module('starter').factory('authInterceptor', function ($location) {
    return {
      request: function(config) {
        if (localStorage.getItem('token')) {
          config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
        }
        return config;
      },
      responseError: function(response) {
        console.log('from the interceptor: ',response);
        return response;
      }
    };
  })


}());
