(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jQuery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var OverlayAd = function () {
  function OverlayAd(element, options) {
    _classCallCheck(this, OverlayAd);

    this.element = element;
    this.$element = $(element);
    this.timer = null;
    this.$window = $(window);
    this.adImg = this.$element.find('a').eq(0).find('img').eq(0);
    this.adLink = this.$element.find('a').eq(0).attr('href');
    this.width = '';
    this.height = '';
    this.conf = {};
    this.options = options;
    this.defaults = {
      'position': 'bottom',
      'mobileStyle': 'responsive',
      'targetBlank': false,
      'backgroundStyle': true,
      'backgroundColor': 'rgba(1,1,1 ,.9)'
    };
  }

  _createClass(OverlayAd, [{
    key: 'responsive',
    value: function responsive() {
      this.adImg.css({
        'maxWidth': '100%',
        'height': 'auto'
      });
    }
  }, {
    key: 'background',
    value: function background() {
      var _this = this;

      this.$element.css({
        'backgroundColor': this.conf.backgroundColor,
        'cursor': 'pointer'
      });
      this.$element.on('click', function () {
        if (_this.conf.targetBlank) {
          window.open(_this.adLink, '_blank');
        } else {
          window.location.href = _this.adLink;
        }
      });
    }
  }, {
    key: 'trimming',
    value: function trimming() {
      var windowWidth = this.$window.width();
      var imgWidth = this.adImg.width();
      var diffWidth = (imgWidth - windowWidth) / 2;

      if (imgWidth > windowWidth) {
        this.$element.css({
          'overflow': 'hidden',
          'width': windowWidth + 'px'
        });
        this.adImg.css({
          'position': 'relative',
          'left': -diffWidth + 'px'
        });
      } else {
        this.$element.css({
          'width': '100%',
          'textAlign': 'center'
        });
        this.adImg.css({
          'position': 'relative',
          'left': 0,
          'right': 0
        });
      }
      this.getResize('trimming');
    }
  }, {
    key: 'checkTimer',
    value: function checkTimer(callback) {
      var _this2 = this;

      window.clearTimeout(this.timer);
      this.timer = window.setTimeout(function () {
        switch (callback) {
          case 'trimming':
            _this2.trimming();
            break;
          default:
            break;
        }
      }, 30);
    }
  }, {
    key: 'getResize',
    value: function getResize(callback) {
      var _this3 = this;

      this.$window.on('resize', function () {
        _this3.checkTimer(callback);
      });
    }
  }, {
    key: 'setStyle',
    value: function setStyle() {
      var positionStyle = {};
      var adStyle = {
        'display': 'inline-block',
        'position': 'fixed',
        'textAlign': 'center'
      };
      if (this.conf.position === 'top' || this.conf.position === 'bottom') {
        positionStyle.left = 0;
        positionStyle.right = 0;
      }
      adStyle[this.conf.position] = 0;
      this.$element.css($.extend({}, positionStyle, adStyle));
      this.adImg.css({
        'display': 'inline',
        'verticalAlign': 'top',
        'zIndex': 998
      });
      this.$element.find('img').each(function () {
        var $this = $(this);
        var width = $this.width();
        var height = $this.height();
        if (width === 1 || height === 1) {
          $this.css('display', 'none');
        }
      });
    }
  }, {
    key: 'getImgSize',
    value: function getImgSize() {
      var imgSize = {};
      if (this.adImg.attr('width') && this.adImg.attr('height')) {
        this.width = this.adImg.attr('width');
        this.height = this.adImg.attr('height');
        imgSize.width = this.width;
        imgSize.height = this.height;
      } else {
        var imgObj = new Image();
        imgObj.src = this.adImg.attr('src');
        this.width = imgObj.width;
        this.height = imgObj.height;
        imgSize.width = this.width;
        imgSize.height = this.height;
      }
      return imgSize;
    }
  }, {
    key: 'init',
    value: function init() {
      this.conf = $.extend({}, this.defaults, this.options);
      this.getImgSize();
      this.setStyle();
      if (this.conf.mobileStyle === 'responsive') {
        this.responsive();
      }
      if (this.conf.mobileStyle === 'trimming') {
        this.trimming();
      }
      if (this.conf.backgroundStyle) {
        this.background();
      }
      return this;
    }
  }]);

  return OverlayAd;
}();

exports.default = OverlayAd;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var _OverlayAd = require('./OverlayAd');

var _OverlayAd2 = _interopRequireDefault(_OverlayAd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (factory) {
  if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
    module.exports = factory((typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null), window, document);
  } else {
    factory(_jquery2.default, window, document);
  }
})(function ($, window, document, undefined) {
  $.extend($.fn, {
    overlayAd: function overlayAd(options) {
      var _this = this;

      return this.each(function () {
        new _OverlayAd2.default(_this, options).init(options);
      });
    }
  });
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./OverlayAd":1}]},{},[2]);
