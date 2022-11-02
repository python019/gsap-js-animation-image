import Cursor from './cursor';
import {preloader} from './preloader';
import LocomotiveScroll from 'locomotive-scroll';
import Menu from './menu';

const menuEl = document.querySelector('.menu');

preloader('.menu__item').then(() => {
    // initialize the smooth scroll
    const scroll = new LocomotiveScroll({el: menuEl, smooth: true});

    const cursor = new Cursor(document.querySelector('.cursor'));

    new Menu(menuEl);
});