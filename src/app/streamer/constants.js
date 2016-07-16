(function() {
  'use strict';

  angular
    .module('app.streamer')
    .constant('twitch', {
      API_URL: 'https://api.twitch.tv/kraken/streams/',
      URL: 'https://www.twitch.tv/',
      CHANNELS: [
        'freecodecamp',
        'storbeck',
        'terakilobyte',
        'habathcx',
        'RobotCaleb',
        'thomasballinger',
        'noobs2ninjas',
        'beohoff',
        'ESL_SC2',
        'OgamingSC2',
        'comster404',
        'brunofin'
      ]
    });
})();
