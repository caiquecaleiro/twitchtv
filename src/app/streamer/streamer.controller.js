(function() {
  'use strict';

  angular
    .module('app.streamer')
    .controller('StreamerController', StreamerController);

  StreamerController.$inject = ['streamerService'];

  function StreamerController(streamerService) {
    var vm = this;
    streamerService.getStreamers()
      .then(function(data) {
        console.log(data);
      });
  }
})();
