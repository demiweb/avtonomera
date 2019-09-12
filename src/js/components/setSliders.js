import { tns } from 'tiny-slider/src/tiny-slider';
import setLazy from './setLazy';

class MySlider {
  constructor(slider, getOptions) {
    this.slider = slider;
    this.name = slider.dataset.slider;
    this.wrap = slider.closest('.slider__wrap');
    this.prev = this.wrap.querySelector('.js-slider-prev');
    this.next = this.wrap.querySelector('.js-slider-next');
    // this.pagination = this.wrap.querySelector('.js-slider-pagination');
    this.slides = [...slider.querySelectorAll('.slide')];

    this.options = getOptions({
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
    this._initSlider();
    this._preventButtonsDefault();
  }

  _initSlider() {
    this.tns = tns(this.options);
  }
}

export default function setSliders() {
  const sliders = [...document.querySelectorAll('.js-slider')];
  if (!sliders.length) return;

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

  sliders.forEach((slider) => {
    const mySlider = new MySlider(slider, getOptions);
    mySlider.init();
  });
}
