import { tns } from 'tiny-slider/src/tiny-slider';
import setLazy from './setLazy';

class FormSlider {
  constructor(slider, options) {
    this.sliderClass = slider;
    this.getOptions = options;
  }

  _getElements() {
    this.slider = document.querySelector(this.sliderClass);
    if (!this.slider) { this.noSlider = true; return; }
    this.name = this.slider.dataset.slider;
    this.wrap = this.slider.closest('.slider__wrap');
    this.prev = this.wrap.querySelector('.js-slider-prev');
    this.next = this.wrap.querySelector('.js-slider-next');
    this.slides = [...this.slider.querySelectorAll('.slide')];

    this.options = this.getOptions({
      container: this.slider,
      nextButton: this.next,
      prevButton: this.prev,
      navContainer: this.pagination,
    })[this.name];
  }

  _preventButtonsDefault() {
    function prevent(e) {
      e.preventDefault();
    }

    this.arrows = [this.prev, this.next];
    this.bullets = [...this.tns.getInfo().navItems];

    this.arrows.forEach((btn) => {
      btn.addEventListener('click', prevent.bind(this));
    });
    this.bullets.forEach((btn) => {
      btn.addEventListener('click', prevent.bind(this));
    });
  }

  init() {
    this._getElements();
    if (this.noSlider) return;

    this._initSlider();
    this._preventButtonsDefault();
  }

  destroy() {
    if (!this.tns.destroy) return;
    this.tns.destroy();
    this.slider = null;
    this.name = undefined;
    this.wrap = null;
    this.prev = null;
    this.next = null;
    this.slides = undefined;
    this.options = undefined;
    this.arrows = undefined;
    this.bullets = undefined;
  }

  _initSlider() {
    this.tns = tns(this.options);
  }
}


function getOptions({
  container, nextButton, prevButton, navContainer,
}) {
  return {
    popup_items: {
      container,
      // navContainer,
      prevButton,
      nextButton,
      items: 1,
      mouseDrag: true,
      onInit: setLazy,
      nav: true,
      responsive: {
        576: {
          items: 2,
        },
        768: {
          items: 3,
        },
        992: {
          // prevButton,
          // nextButton
          nav: false,
        },
      },
    },
  };
}

const formSlider = new FormSlider('.js-slider[data-slider="popup_items"]', getOptions);

export default formSlider;
