'use strict';

var deps = [];

module.exports = angular.module('app.directive.player', deps)
  .directive('player', function() {
    return {
      restrict: 'E',
      scope: {},
      template: require('ng-cache!./player.html'),
      controller: require('./playerCtrl'),
      controllerAs: 'player'
    };
  });
