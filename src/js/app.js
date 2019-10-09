import 'core-js/features/symbol';
import 'core-js/features/array/from';
import 'core-js/features/promise';
import 'core-js/features/object/assign';
import 'intersection-observer';
import './lib/polyfill';

import sayHello from './lib/sayHello';
import setHTMLClassNames from './components/setHTMLClassNames';
import setLazy from './components/setLazy';
import { setVhProperty } from './helpers';
import toggleMenu from './components/toggleMenu';
import setHeaderOnScroll from './components/setHeaderOnScroll';
import setInputMask from './components/setInputMask';
import setTextareaHeight from './components/setTextareaHeight';
// import popup from './components/setPopups';
import formSlider from './components/setSliders';
import Popup from './lib/popup';

document.addEventListener('DOMContentLoaded', () => {
  sayHello();
  setHTMLClassNames();
  setLazy();
  setVhProperty();
  toggleMenu();
  setHeaderOnScroll();
  setInputMask();
  setTextareaHeight();
  // setPopups();
  // setSliders();
  // formSlider.init();
});

window.formSlider = formSlider;
window.setLazy = setLazy;
// window.popup = popup;
window.Popup = Popup;
