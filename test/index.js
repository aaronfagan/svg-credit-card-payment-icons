// test/index.js

const assert = require('chai').assert;
const cc = require('../src/index.js');

describe('credit card icons', function () {
  describe('styles()', function () {
    it('styles function should exist', function () {
      assert.exists(cc.styles);
    });

    it('styles() result is a Set', function () {
      assert.typeOf(cc.styles(), 'Set', 'result is a Set');
    });

    it('should return available styles', function () {
      assert.isTrue(cc.styles().has('flat'));
      assert.isTrue(cc.styles().has('flat-rounded'));
      assert.isTrue(cc.styles().has('mono'));
      assert.isTrue(cc.styles().has('mono-outline'));
      assert.isTrue(cc.styles().has('logo'));
      assert.isTrue(cc.styles().has('logo-border'));
    });

    it('should not include extra styles', function () {
      assert.equal(cc.styles().size, 6, 'no extra styles included');
    });
  });

  describe('icons()', function () {
    it('icons function should exist', function () {
      assert.exists(cc.icons);
    });

    describe('#flat', function () {
      it('icons("flat") result is a Set', function () {
        assert.typeOf(cc.icons('flat'), 'Set', 'result is a Set');
      });

      it('should return available flat icons', function () {
        assert.isTrue(cc.icons('flat').has('alipay'));
        assert.isTrue(cc.icons('flat').has('amex'));
        assert.isTrue(cc.icons('flat').has('code-front'));
        assert.isTrue(cc.icons('flat').has('code'));
        assert.isTrue(cc.icons('flat').has('diners'));
        assert.isTrue(cc.icons('flat').has('discover'));
        assert.isTrue(cc.icons('flat').has('elo'));
        assert.isTrue(cc.icons('flat').has('generic'));
        assert.isTrue(cc.icons('flat').has('hipercard'));
        assert.isTrue(cc.icons('flat').has('hiper'));
        assert.isTrue(cc.icons('flat').has('jcb'));
        assert.isTrue(cc.icons('flat').has('maestro'));
        assert.isTrue(cc.icons('flat').has('mastercard'));
        assert.isTrue(cc.icons('flat').has('mir'));
        assert.isTrue(cc.icons('flat').has('paypal'));
        assert.isTrue(cc.icons('flat').has('unionpay'));
        assert.isTrue(cc.icons('flat').has('visa'));
      });

      it('should not include extra flat icons', function () {
        assert.equal(cc.icons('flat').size, 17, 'no extra icons included');
      });
    });

    describe('#flat-rounded', function () {
      it('icons("flat-rounded") result is a Set', function () {
        assert.typeOf(cc.icons('flat-rounded'), 'Set', 'result is a Set');
      });

      it('should return available flat-rounded icons', function () {
        assert.isTrue(cc.icons('flat-rounded').has('alipay'));
        assert.isTrue(cc.icons('flat-rounded').has('amex'));
        assert.isTrue(cc.icons('flat-rounded').has('code-front'));
        assert.isTrue(cc.icons('flat-rounded').has('code'));
        assert.isTrue(cc.icons('flat-rounded').has('diners'));
        assert.isTrue(cc.icons('flat-rounded').has('discover'));
        assert.isTrue(cc.icons('flat-rounded').has('elo'));
        assert.isTrue(cc.icons('flat-rounded').has('generic'));
        assert.isTrue(cc.icons('flat-rounded').has('hipercard'));
        assert.isTrue(cc.icons('flat-rounded').has('hiper'));
        assert.isTrue(cc.icons('flat-rounded').has('jcb'));
        assert.isTrue(cc.icons('flat-rounded').has('maestro'));
        assert.isTrue(cc.icons('flat-rounded').has('mastercard'));
        assert.isTrue(cc.icons('flat-rounded').has('mir'));
        assert.isTrue(cc.icons('flat-rounded').has('paypal'));
        assert.isTrue(cc.icons('flat-rounded').has('unionpay'));
        assert.isTrue(cc.icons('flat-rounded').has('visa'));
      });

      it('should not include extra flat-rounded icons', function () {
        assert.equal(cc.icons('flat-rounded').size, 17, 'no extra icons included');
      });
    });

    describe('#mono', function () {
      it('icons("mono") result is a Set', function () {
        assert.typeOf(cc.icons('mono'), 'Set', 'result is a Set');
      });

      it('should return available mono icons', function () {
        assert.isTrue(cc.icons('mono').has('alipay'));
        assert.isTrue(cc.icons('mono').has('amex'));
        assert.isTrue(cc.icons('mono').has('code-front'));
        assert.isTrue(cc.icons('mono').has('code'));
        assert.isTrue(cc.icons('mono').has('diners'));
        assert.isTrue(cc.icons('mono').has('discover'));
        assert.isTrue(cc.icons('mono').has('elo'));
        assert.isTrue(cc.icons('mono').has('generic'));
        assert.isTrue(cc.icons('mono').has('hipercard'));
        assert.isTrue(cc.icons('mono').has('hiper'));
        assert.isTrue(cc.icons('mono').has('jcb'));
        assert.isTrue(cc.icons('mono').has('maestro'));
        assert.isTrue(cc.icons('mono').has('mastercard'));
        assert.isTrue(cc.icons('mono').has('mir'));
        assert.isTrue(cc.icons('mono').has('paypal'));
        assert.isTrue(cc.icons('mono').has('unionpay'));
        assert.isTrue(cc.icons('mono').has('visa'));
      });

      it('should not include extra mono icons', function () {
        assert.equal(cc.icons('mono').size, 17, 'no extra icons included');
      });
    });

    describe('#mono-outline', function () {
      it('icons("mono-outline") result is a Set', function () {
        assert.typeOf(cc.icons('mono-outline'), 'Set', 'result is a Set');
      });

      it('should return available mono-outline icons', function () {
        assert.isTrue(cc.icons('mono-outline').has('alipay'));
        assert.isTrue(cc.icons('mono-outline').has('amex'));
        assert.isTrue(cc.icons('mono-outline').has('code-front'));
        assert.isTrue(cc.icons('mono-outline').has('code'));
        assert.isTrue(cc.icons('mono-outline').has('diners'));
        assert.isTrue(cc.icons('mono-outline').has('discover'));
        assert.isTrue(cc.icons('mono-outline').has('elo'));
        assert.isTrue(cc.icons('mono-outline').has('generic'));
        assert.isTrue(cc.icons('mono-outline').has('hipercard'));
        assert.isTrue(cc.icons('mono-outline').has('hiper'));
        assert.isTrue(cc.icons('mono-outline').has('jcb'));
        assert.isTrue(cc.icons('mono-outline').has('maestro'));
        assert.isTrue(cc.icons('mono-outline').has('mastercard'));
        assert.isTrue(cc.icons('mono-outline').has('mir'));
        assert.isTrue(cc.icons('mono-outline').has('paypal'));
        assert.isTrue(cc.icons('mono-outline').has('unionpay'));
        assert.isTrue(cc.icons('mono-outline').has('visa'));
      });

      it('should not include extra mono-outline icons', function () {
        assert.equal(cc.icons('mono-outline').size, 17, 'no extra icons included');
      });
    });

    describe('#logo', function () {
      it('icons("logo") result is a Set', function () {
        assert.typeOf(cc.icons('logo'), 'Set', 'result is a Set');
      });

      it('should return available logo icons', function () {
        assert.isTrue(cc.icons('logo').has('alipay'));
        assert.isTrue(cc.icons('logo').has('amex'));
        assert.isTrue(cc.icons('logo').has('code-front'));
        assert.isTrue(cc.icons('logo').has('code'));
        assert.isTrue(cc.icons('logo').has('diners'));
        assert.isTrue(cc.icons('logo').has('discover'));
        assert.isTrue(cc.icons('logo').has('elo'));
        assert.isTrue(cc.icons('logo').has('generic'));
        assert.isTrue(cc.icons('logo').has('hipercard'));
        assert.isTrue(cc.icons('logo').has('hiper'));
        assert.isTrue(cc.icons('logo').has('jcb'));
        assert.isTrue(cc.icons('logo').has('maestro'));
        assert.isTrue(cc.icons('logo').has('mastercard'));
        assert.isTrue(cc.icons('logo').has('mir'));
        assert.isTrue(cc.icons('logo').has('paypal'));
        assert.isTrue(cc.icons('logo').has('unionpay'));
        assert.isTrue(cc.icons('logo').has('visa'));
      });

      it('should not include extra logo icons', function () {
        assert.equal(cc.icons('logo').size, 17, 'no extra icons included');
      });
    });

    describe('#logo-border', function () {
      it('icons("logo-border") result is a Set', function () {
        assert.typeOf(cc.icons('logo-border'), 'Set', 'result is a Set');
      });

      it('should return available logo-border icons', function () {
        assert.isTrue(cc.icons('logo-border').has('alipay'));
        assert.isTrue(cc.icons('logo-border').has('amex'));
        assert.isTrue(cc.icons('logo-border').has('code-front'));
        assert.isTrue(cc.icons('logo-border').has('code'));
        assert.isTrue(cc.icons('logo-border').has('diners'));
        assert.isTrue(cc.icons('logo-border').has('discover'));
        assert.isTrue(cc.icons('logo-border').has('elo'));
        assert.isTrue(cc.icons('logo-border').has('generic'));
        assert.isTrue(cc.icons('logo-border').has('hipercard'));
        assert.isTrue(cc.icons('logo-border').has('hiper'));
        assert.isTrue(cc.icons('logo-border').has('jcb'));
        assert.isTrue(cc.icons('logo-border').has('maestro'));
        assert.isTrue(cc.icons('logo-border').has('mastercard'));
        assert.isTrue(cc.icons('logo-border').has('mir'));
        assert.isTrue(cc.icons('logo-border').has('paypal'));
        assert.isTrue(cc.icons('logo-border').has('unionpay'));
        assert.isTrue(cc.icons('logo-border').has('visa'));
      });

      it('should not include extra logo-border icons', function () {
        assert.equal(cc.icons('logo-border').size, 17, 'no extra icons included');
      });
    });
  });

  describe('#ccIcon()', function () {
    it('ccIcon function should exist', function () {
      assert.exists(cc.ccIcon);
    });

    it('should throw when given unknown icon', function () {
      assert.throws(function () {
        cc.ccIcon('xyzzy');
      }, 'unsupported icon: xyzzy');
    });

    it('should throw when given unknown style', function () {
      assert.throws(function () {
        cc.ccIcon('alipay', 'xyzzy');
      }, 'unsupported style: xyzzy');
    });

    it('should return an <img> node', function () {
      assert.typeOf(cc.ccIcon('alipay'), 'HTMLImageElement', 'must be an image node');
    });
  });
});
