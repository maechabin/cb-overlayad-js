;(function ($, QUnit, window, document, undefined) {

  "use strict";

  QUnit.module("overlayAd Defult", {
    testElem: $(".image")
  });

  QUnit.test('$.fn.overlayAd()が読み込まれている', function (assert) {
    this.testElem.overlayAd();
    assert.ok($.fn.overlayAd, "Passed!!");
  });

} (jQuery, QUnit, window, document));
