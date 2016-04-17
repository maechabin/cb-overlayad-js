var jQuery = require('jquery');
export default class OverlayAd {

  constructor(element, options) {
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

  responsive() {
    this.adImg.css({
      'maxWidth': '100%',
      'height': 'auto'
    });
  }

  background() {
    this.$element.css({
      'backgroundColor': this.conf.backgroundColor,
      'cursor': 'pointer'
    });
    this.$element.on('click', () => {
      if (this.conf.targetBlank) {
        window.open(this.adLink, '_blank');
      } else {
        window.location.href = this.adLink;
      }
    });
  }

  trimming() {
    let windowWidth = this.$window.width();
    let imgWidth = this.adImg.width();
    let diffWidth = (imgWidth - windowWidth) / 2;

    if (imgWidth > windowWidth) {
      this.$element.css({
        'overflow': 'hidden',
        'width': windowWidth + 'px'
      });
      this.adImg.css({
        'position': 'relative',
        'left': - diffWidth + 'px'
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

  checkTimer(callback) {
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      switch (callback) {
        case 'trimming':
          this.trimming();
          break;
        default:
          break;
      }
    }, 30);
  }

  getResize(callback) {
    this.$window.on('resize', () => {
      this.checkTimer(callback);
    });
  }

  setStyle() {
    let positionStyle = {};
    let adStyle = {
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
      let $this = $(this);
      let width = $this.width();
      let height = $this.height();
      if (width === 1 || height === 1) {
        $this.css('display', 'none');
      }
    });
  }

  getImgSize() {
    let imgSize = {};
    if (this.adImg.attr('width') && this.adImg.attr('height')) {
      this.width = this.adImg.attr('width');
      this.height = this.adImg.attr('height');
      imgSize.width = this.width;
      imgSize.height = this.height;
    } else {
      let imgObj = new Image();
      imgObj.src = this.adImg.attr('src');
      this.width = imgObj.width;
      this.height = imgObj.height;
      imgSize.width = this.width;
      imgSize.height = this.height;
    }
    return imgSize;
  }

  init() {
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

}
