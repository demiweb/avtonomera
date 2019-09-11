import 'core-js/features/symbol';
import 'core-js/features/array/from';
import 'core-js/features/promise';
import 'core-js/features/object/assign';
import 'intersection-observer';
import './lib/polyfill';

import sayHello from './lib/sayHello';
import setHTMLClassNames from './components/setHTMLClassNames';
import setLazy from './components/setLazy';
import toggleMenu from './components/toggleMenu';
import setHeaderOnScroll from './components/setHeaderOnScroll';
import setInputMask from './components/setInputMask';
import setTextareaHeight from './components/setTextareaHeight';

document.addEventListener('DOMContentLoaded', () => {
  sayHello();
  setHTMLClassNames();
  setLazy();
  toggleMenu();
  setHeaderOnScroll();
  setInputMask();
  setTextareaHeight();
});
