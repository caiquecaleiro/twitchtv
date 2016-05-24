(function() {
  'use strict';

  angular
    .module('app.streamer')
    .constant('twitch', {
      URL: 'https://api.twitch.tv/kraken/streams/',
      CHANNELS: [
        'freecodecamp',
        'storbeck',
        'terakilobyte',
        'habathcx',
        'RobotCaleb',
        'thomasballinger',
        'noobs2ninjas',
        'beohoff',
        'ESL_SC2'
      ]
    });
})();
