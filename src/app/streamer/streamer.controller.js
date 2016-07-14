(function() {
  'use strict';

  angular
    .module('app.streamer')
    .controller('StreamerController', StreamerController);

  StreamerController.$inject = ['streamerService'];

  function StreamerController(streamerService) {
    var vm = this;
    vm.streamers = null;

    streamerService.getStreamers()
      .then(function(data) {
        vm.streamers = data;
      });
  }
})();
