describe('trimフィルターのテスト', function() {
    beforeEach(module('myApp.filter'));

    it('文字列の前後から空白を除去', inject(function($filter) {
      var msg = '   こんにちは、世界！   '; // 引数
      var result = 'こんにちは、世界！';  // 期待される結果
      // trimフィルターを実行して、結果を検証
      var trim = $filter('trim');
      expect(trim(msg)).toEqual(result);
    }));
  });