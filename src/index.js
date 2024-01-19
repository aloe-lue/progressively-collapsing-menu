import './assets/component-one/style.css';
import dropDown from '@aloe_vera/drop-down-func/package/nav-func';
import {
  fillMenuLinks,
  getAllElements,
  getMenuLinks,
} from './js/progressive-collapsing-menu';

window.addEventListener('load', () => {
  const moreLinks = document.querySelectorAll('a[data-more-menu-link]');

  dropDown({
    elementToListen: moreLinks,
    itsDataAttribute: 'data-more-menu-link',
    subElement: 'div[data-more-link-inside',
    classListValue: 'visible',
    togglerClassListValue: 'active-toggler',
    closerToggler: '.close_toggler > div',
  }).dropDownElement();
});

const menuLinks = document.querySelector('ul[class="unordered_links"]');
const moreMenuLinks = document.querySelector(
  'ul[class="more_unordered_links"]',
);
const navigationLinks = document.querySelectorAll(
  'ul[class="unordered_links"] > li[class="contain_link"]',
);
const moreNavLink = document.querySelector(
  'li[class="contain_link more_links"]',
);

getMenuLinks({
  elements: navigationLinks,
}).pushAll();

window.addEventListener('resize', () => {
  getAllElements({ elements: navigationLinks }).removeEach();

  fillMenuLinks({
    menuLinksParent: menuLinks,
    moreMenuLinksElement: moreMenuLinks,
    moreMenuLinkToggler: moreNavLink,
    adjustIt: 40,
  }).filltabs();
});
