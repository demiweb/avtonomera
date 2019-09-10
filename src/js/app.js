import 'core-js/features/symbol';
import 'core-js/features/array/from';
import 'core-js/features/promise';
import './lib/polyfill';

import sayHello from './lib/sayHello';
import setHTMLClassNames from './components/setHTMLClassNames';
import setLazy from './components/setLazy';
import toggleMenu from './components/toggleMenu';
import setHeaderOnScroll from './components/setHeaderOnScroll';

document.addEventListener('DOMContentLoaded', () => {
  sayHello();
  setHTMLClassNames();
  setLazy();
  toggleMenu();
  setHeaderOnScroll();
});
