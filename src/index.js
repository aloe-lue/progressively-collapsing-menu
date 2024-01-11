import './assets/component-one/style.css';
import dropDown from '@aloe_vera/drop-down-func/package/nav-func';
import { navigationLinks } from './js/progressive-collapsing-menu';

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

const allNavListOfLinks = document.querySelectorAll('li[class="contain_link"]');
const allNavAnchorLinks = document.querySelectorAll('a[data-menu-link]');

const navLinks = navigationLinks();
navLinks.addNavigationListOfLinks(allNavListOfLinks);
navLinks.itsLinkWidthGetter(allNavAnchorLinks);

window.addEventListener('resize', () => {
  console.log(navLinks.navigationListOfLinksArray, navLinks.anchorLinkWidth);
});
