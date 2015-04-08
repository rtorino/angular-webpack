'use strict';

require('videojs');

var deps = [];

module.exports = angular.module('app.component.player', deps)
  .directive('player', function() {

    function link(scope, element, attrs) {
      attrs.type = attrs.type || 'video/mp4';
    
      var options = {
        autoplay: false,
        controls: true,
        preload: 'auto',
        techOrder: ['html5', 'flash'],
        height: 480,
        width: 864
      };

      var videoId = 107;
      attrs.id = 'videojs' + videoId;
      
      element.attr('id', attrs.id);
      
      videojs(attrs.id, options, function() {
        this.src({
          type: attrs.type, 
          src: 'http://pmd-bc-gujstreaming-test.guj.de/gujstreaming/hd_uds/68348640001/201501/68348640001_3986496343001_trailer-720p.mp4'
        });
      });
    }

    return {
      restrict: 'E',
      replace: true,
      template: require('ng-cache!./player.html'),
      link: link
    };
  });
