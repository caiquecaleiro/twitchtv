(function() {
  'use strict';

  angular
    .module('app.streamer')
    .controller('StreamerController', StreamerController);

  StreamerController.$inject = ['streamerFactory'];

  function StreamerController(streamerFactory) {
    var vm = this;
    console.log(streamerFactory.getStreamers());
  }
})();
