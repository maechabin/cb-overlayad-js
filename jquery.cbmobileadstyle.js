/*!
 * jquery.cbMobileAdStyle.js v1.1.3
 * Auther @maechabin
 * Licensed under mit license
 * https://github.com/maechabin/jquery.cb-mobileadstyle.js
 */
;(function (factory) {

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

  MobileAdStyle.prototype.interstitial = function () {

    var that = this;
    var bg = $("<div>").css({

      "position": "absolute",
      "top": 0,
      "width": "100%",
      "height": "100%",
      "background-color": "rgba(0,0,0,.8)",
      "z-index": 999

    });

    var clear_btn = $("<button>").html("×").css({

      "width": "32px",
      "line-height": "24px",
      "background-color": "#fff",
      "border": "none",
      "cursor": "pointer",
      "border-radius": "2px",
      "font-size": "18px",
      "position": "absolute",
      "top": "8px",
      "right": "8px",
      "opacity": 1,
      "z-index": 1000

    });

    that.$element.append(bg);
    $(bg).append(clear_btn);

    this.adstyle.css("display", "inline").css({

      "position": "absolute",
      "top": 0,
      "bottom": 0,
      "left": 0,
      "right": 0,
      "margin": "auto",
      "opacity": 1,
      "z-index": 1000

    });

    clear_btn.on("click", function () {

      that.$element.fadeOut(500).promise().then(function () {

        $(this).empty();

      });

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

  MobileAdStyle.prototype.retina = function () {

    var w = this.adstyle.width() / 2;
    var h = this.adstyle.height() / 2;

    this.adstyle.css({

      "width": w + "px",
      "height": h + "px"

    });

    return this;

  };

  MobileAdStyle.prototype.random = function (options) {

    if (options === "") {

      return this;

    }

    var img_list, img_random;
    var default_url = this.$element.find("a").attr("href");
    var default_image = this.adstyle.attr("src");

    img_list = options.ad;
    img_list.push({url: default_url, image: default_image});

    img_random = Math.floor(Math.random() * img_list.length);
    this.$element.find("a").attr("href", img_list[img_random].url);
    this.adstyle.attr("src", img_list[img_random].image);

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

    this.$element.on("click",  function () {

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

    clearTimeout(this.timer);

    this.timer = setTimeout(function () {

      switch (callback) {

        case "triming":
          that.triming();
          break;

        default:
          console.log("no callback");
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

    cbOverlay: function (options) {

      return this.each(function () {

        new MobileAdStyle(this).overlay(options);

      });

    },

    cbInterstitial: function () {

      return this.each(function () {

        new MobileAdStyle(this).interstitial();

      });

    },

    cbResponsive: function () {

      return this.each(function () {

        new MobileAdStyle(this).responsive();

      });

    },

    cbRetina: function () {

        return this.each(function () {

            new MobileAdStyle(this).retina();

        });

    },

    cbTriming: function () {

      return this.each(function () {

        new MobileAdStyle(this).triming();

      });

    },

    cbBackground: function (options) {

      return this.each(function () {

        new MobileAdStyle(this).background(options);

      });

    },

    cbRandom: function (options) {

      return this.each(function () {

        new MobileAdStyle(this).random(options);

      });

    }

  });

}));
