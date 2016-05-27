(function(){

  angular.module('starter')
  .service('SocketService', ['socketFactory', function(socketFactory) {

    return socketFactory({
      // change the url to the heroku URL before deploying
      ioSocket: io.connect('http://localhost:3000')
      ioSocket: io.connect('https://yodelappbcjmm.herokuapp.com')

    });

  }])




})();
