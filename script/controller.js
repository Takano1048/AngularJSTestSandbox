// myApp.controllerモジュールにmyControllerコントローラーを登録
angular.module('myApp.controller', [])
  .controller('myController', ['$scope', function($scope) {
    // 変数msgを初期化
    $scope.msg = 'こんにちは、誰かさん！';
    // clickイベントリスナーを設定
    $scope.onclick = function() {
      $scope.msg = 'こんにちは、' + $scope.name + 'さん！';
    };
  }]);