(function() {
    'use strict';

    angular
        .module('myApp')
        .service('graphWindowService', graphWindowService);

    graphWindowService.$inject = ['$http', 'connecticutApiFactory'];

    function graphWindowService($http, connecticutApiFactory) {
      var GraphWindowService = {
        'teststring': 'testtesttesttest',
        'connecticutDataRaw': [],
        'connecticutDemographics': {},

        exampleFunction: function(arg) {
          var myself = this;

        },

        queryConnecticut: function() {
          var myself = this;
          return connecticutApiFactory.queryConnecticutFull().then(function(data) {
            myself.connecticutDataRaw = angular.copy(data);
            // console.log(myself.connecticutDataRaw);
          })
        },

        consolidateConnecticutData: function() {
          var myself = this;
          var demographics = {
            'white': {
              'gender': {
                'Male': 0,
                'Female': 0,
              },
              'age_group': {
                '19_29': 0,
                '30_39': 0,
                '40_49': 0,
                '50_59': 0,
                '60plus': 0,
              },
              'total': 0,
            },
            'black': {
              'gender': {
                'Male': 0,
                'Female': 0,
              },
              'age_group': {
                '19_29': 0,
                '30_39': 0,
                '40_49': 0,
                '50_59': 0,
                '60plus': 0,
              },
              'total': 0,
            },
            'hispanic': {
              'gender': {
                'Male': 0,
                'Female': 0,
              },
              'age_group': {
                '19_29': 0,
                '30_39': 0,
                '40_49': 0,
                '50_59': 0,
                '60plus': 0,
              },
              'total': 0,
            },
            'other': {
              'gender': {
                'Male': 0,
                'Female': 0,
              },
              'age_group': {
                '19_29': 0,
                '30_39': 0,
                '40_49': 0,
                '50_59': 0,
                '60plus': 0,
              },
              'total': 0,
            }
          };

          function getAgeGroup(obj) {
            var age = parseInt(obj.age);
            if (age <=29) {
              return '19_29';
            }
            if (age >= 30 && age <=39) {
              return '30_39';
            }
            if (age >= 40 && age <=49) {
              return '40_49';
            }
            if (age >= 50 && age <=59) {
              return '50_59';
            }
            if (age >= 60) {
              return '60plus';
            }
          };

          for (var i=0; i < myself.connecticutDataRaw.length; i++) {
            var current = myself.connecticutDataRaw[i];
            switch (current.race) {
              case 'White':{
                demographics.white.gender[current.sex]++;
                demographics.white.total++;
                demographics.white.age_group[getAgeGroup(current)]++;
                break;
              }
              case 'Black':{
                demographics.black.gender[current.sex]++;
                demographics.black.total++;
                demographics.black.age_group[getAgeGroup(current)]++;
                break;
              }
              case 'Hispanic, White':
              case 'Hispanic, Black': {
                demographics.hispanic.gender[current.sex]++;
                demographics.hispanic.total++;
                demographics.hispanic.age_group[getAgeGroup(current)]++;
                break;
              }
              default: {
                demographics.other.gender[current.sex]++;
                demographics.other.total++;
                demographics.other.age_group[getAgeGroup(current)]++;
                break;
              }
            }
          };

          myself.connecticutDemographics = angular.copy(demographics);
          console.log(myself.connecticutDemographics);
        },

      }

      return GraphWindowService;

    }
})();
