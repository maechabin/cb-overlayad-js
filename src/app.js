import jQuery from 'jquery';
import OverlayAd from './OverlayAd';

((factory) => {
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(require('jquery'), window, document);
  } else {
    factory(jQuery);
  }
})(($) => {
  $.extend($.fn, {
    overlayAd(options) {
      return this.each(() => {
        new OverlayAd(this, options).init(options);
      });
    },
  });
});
