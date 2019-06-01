angular.module('myApp.filter', [])
  // trimフィルターを定義
  .filter('trim', function() {
    return function(value) {
      // 加工対象の値が文字列であるかを判定
      if (!angular.isString(value)) {
        return value;
      }
      // 文字列の前後から空白を除去
      return value.trim();
    };
  })
  .controller('MyController', ['$scope', function($scope) {
    $scope.msg = '   こんにちは、世界！   ';
  }]);