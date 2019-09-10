import { throttle } from 'throttle-debounce';

const IS_SCROLLED = 'is-scrolled';

class Header {
  constructor(header) {
    this.header = header;
  }

  toggle() {
    if (window.pageYOffset > 100) {
      this.header.classList.add(IS_SCROLLED);
    } else {
      this.header.classList.remove(IS_SCROLLED);
    }
  }

  _toggleClass() {
    this.toggleThrottled = throttle(66, this.toggle.bind(this));
    window.addEventListener('scroll', this.toggleThrottled);
  }

  init() {
    this._toggleClass();
  }
}

export default function setHeaderOnScroll() {
  const header = document.querySelector('.js-header');

  const hd = new Header(header);
  hd.init();
}
