describe('AreaServiceサービスのテスト', function() {
    var AreaService;

    beforeEach(module('myApp.service'));

    beforeEach(inject(function(_AreaService_){
      AreaService = _AreaService_;
    }));

    it('四角形の面積を求める', function() {
      expect(AreaService.square(3, 2)).toEqual(6);
    });

    it('円の面積を求める', function() {
      expect(AreaService.circle(3)).toEqual(28.274333882308138);
    });

    it('ひし形の面積を求める', inject(function($log) {
      expect(AreaService.diamond(4, 9)).toEqual(18);
    }));
  });