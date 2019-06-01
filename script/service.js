angular.module('myApp.service', [])
  .service('AreaService', ['$log', function($log) {
    this.square = function(base, height) {
      $log.debug('［四角形］' + base + '×' + height);
      return base * height;
    };

    this.circle = function(radius) {
      $log.debug('［円（半径）］' + radius);
      return radius * radius * Math.PI;
    };

    this.diamond = function(diagonal1, diagonal2) {
      $log.debug('［ひし形］' + diagonal1 + '×' + diagonal2);
      return diagonal1 * diagonal2 / 2;
    };
  }]);