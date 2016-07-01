(function() {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'app.streamer'
    ])
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  }
})();
