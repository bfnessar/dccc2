(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('connecticutApiFactory', connecticutApiFactory);

    connecticutApiFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function connecticutApiFactory($http, $q) {
        var ConnecticutApiService = {
            'teststring': 'test test service factory test',
            queryFiltered: queryFiltered,
            queryConnecticutFull: queryConnecticutFull,
        };
        return ConnecticutApiService;

        function queryFiltered(attribute, value) {
          var deferred = $q.defer();
          var target_url = `https://data.ct.gov/resource/u2qy-687x.json?${attribute}=${value}`;

          console.log("querying at url: " + target_url);

          $http.get(target_url)
            .then(function(response) {
              deferred.resolve(response.data);
            })
            .catch(function() {
              deferred.reject('error: could not query ');
            })
          return deferred.promise;
        }

        function queryConnecticutFull() {
          var deferred = $q.defer();
          var target_url = "https://data.ct.gov/resource/u2qy-687x.json?$query=SELECT date, sex, race, age, death_city WHERE any_opioid = 'Y' ORDER BY date";

          $http.get(target_url)
            .then(function(response) {
              deferred.resolve(response.data);
            })
            .catch(function() {
              deferred.reject('error');
            })
          return deferred.promise;

        }




    }
})();
