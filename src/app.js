'use strict';

require('angular-ui-router'),
require('./directives/player').name

angular.element(document).ready(function() {
  var deps = [
    'ui.router',
    'app.directive.player'
  ];

  angular.module('app', deps)
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('player', {
          url: '/',
          template: '<player></player>'
        });
    });

    angular.bootstrap(document, ['app']);
});
