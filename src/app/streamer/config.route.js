(function() {
  'use strict';

  angular
    .module('app.streamer')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/streamer/streamer.html',
        controller: 'StreamerController',
        controllerAs: 'vm'
      });
  }
})();
