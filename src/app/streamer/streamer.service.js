(function() {
  'use strict';

  angular
    .module('app.streamer')
    .factory('streamerService', streamerService);

  streamerService.$inject = ['$http', '$q', 'twitch'];

  function streamerService($http, $q, twitch) {
    var service = {
      getStreamers: getStreamers
    };

    return service;

    function getStreamers() {
      var promises = [];
      var deferred = $q.defer();

      angular.forEach(twitch.CHANNELS, function(value) {
        promises.push(getData(value));
      });

      $q.all(promises).then(
        function(streamers) {
          deferred.resolve(streamers);
        });
      return deferred.promise;
    }

    function getData(username) {
      var deferred = $q.defer();
      $http.jsonp(twitch.URL + username + '?callback=JSON_CALLBACK')
        .success(function(data) {
          var streamer = null;
          if (data.stream) {
            streamer = new Streamer(
              data.stream.channel.display_name,
              'Online',
              data.stream.channel.status
            );
          } else {
            streamer = new Streamer(
              username,
              'Offline',
              ''
            );
          }
          deferred.resolve(streamer);
        })
        .error(function(data) {
          deferred.reject(data);
        });
        return deferred.promise;
    }

    function Streamer(name, status, description) {
      this.name = name;
      this.status = status;
      this.description = description;
    }
  }
})();
