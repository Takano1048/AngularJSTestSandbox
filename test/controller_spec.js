describe('MyControllerコントローラーのテスト', function() {
    var scope;

    beforeEach(module('myApp.controller'));

    beforeEach(inject(function(_$rootScope_, _$controller_){
      var $rootScope = _$rootScope_;
      var $controller = _$controller_;
      scope = $rootScope.$new();
      // 1第2引数に$scopeを渡す
      $controller('myController', { $scope: scope });
    }));

    it('スコープのチェック', function() {
      expect(scope.msg).toEqual('こんにちは、誰かさん！');
      scope.name = '山田太郎';
      scope.onclick();
      expect(scope.msg).toEqual('こんにちは、山田太郎さん！');
    });
  });