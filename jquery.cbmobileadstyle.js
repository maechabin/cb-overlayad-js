/*!
 * jquery.overlayad.js v1.1.5
 * Auther @maechabin
 */
;(function (factory) {
  "use strict";

  if(typeof module === "object" && typeof module.exports === "object") {
    module.exports = factory(require("jquery"), window, document);
  } else {
    factory(jQuery, window, document);
  }

} (function ($, window, document, undefined) {
  "use strict";

  var MobileAdStyle = function (element) {
    this.element = element;
    this.$element = $(element);
    this.timer = null;
    this.adstyle = this.$element.find(".cb-adstyle");
    this.$element.find("img").each(function () {
      var $this = $(this);
      var width = $this.width();
      if (width === 1) {
        $this.css("display", "none");
      }
    });
  };

  MobileAdStyle.prototype.overlay = function (options) {
    var style;
    var position = "bottom";

    if (options !== undefined && options.position === "top") {
      position = "top";
    }
    style = {
      "position": "fixed",
      "left": 0,
      "right": 0,
      "text-align": "center"
    };
    style[position] = 0;
    this.$element.css(style);
    this.adstyle.css({
      "display": "inline",
      "vertical-align": "bottom",
      "z-index": 998
    });
    return this;
  };

  MobileAdStyle.prototype.responsive = function () {
    this.adstyle.css({
      "max-width": "100%",
      "height": "auto"
    });
    return this;
  };

  MobileAdStyle.prototype.background = function (options) {
    var link = this.$element.find("a").eq(0).attr("href");
    var bgcolor = "rgba(0,0,0,.8)";

    if (options !== undefined && options.bgcolor !== "") {
      bgcolor = options.bgcolor;
    }
    this.$element.css({
      "background-color": bgcolor,
      "cursor": "pointer"
    });
    this.$element.on("click", function () {
      window.open(link, "_blank");
    });
    return this;
  };

  MobileAdStyle.prototype.triming = function () {
    var window_width = $(window).width();
    var img_width = this.adstyle.width();
    var diff_width = (img_width - window_width) / 2;

    if (img_width > window_width) {
      this.$element.css({
        "overflow": "hidden",
        "width": window_width + "px",
      });
      this.adstyle.css("display", "inline").css({
        "position": "relative",
        "left": - diff_width + "px"
      });
    } else {
      this.$element.css({
        "width": "100%",
        "text-align": "center"
      });
      this.adstyle.css("display", "inline").css({
        "position": "relative",
        "left": 0,
        "right": 0
      });
    }
    this.getResize("triming");
    return this;
  };

  MobileAdStyle.prototype.checkTimer = function (callback) {
    var that = this;
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(function () {
      switch (callback) {
        case "triming":
          that.triming();
          break;
        default:
          window.console.log("no callback");
          break;
      }
    }, 30);
  };

  MobileAdStyle.prototype.getResize = function (callback) {
    var that = this;
    $(window).on("resize", function () {
      that.checkTimer(callback);
    });
  };

  $.extend($.fn, {

    overlayAd: function (options) {
      return this.each(function () {
        new MobileAdStyle(this).overlay(options);
      });
    },

    responsive: function () {
      return this.each(function () {
        new MobileAdStyle(this).responsive();
      });
    },

    triming: function () {
      return this.each(function () {
        new MobileAdStyle(this).triming();
      });
    },

    background: function (options) {
      return this.each(function () {
        new MobileAdStyle(this).background(options);
      });
    }

  });

}));
