(function() {
  'use strict';

  angular
    .module('app.streamer')
    .constant('twitchUrl', {
      STREAMS: 'https://api.twitch.tv/kraken/streams/'
    });
})();
