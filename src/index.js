import './assets/component-one/style.css';
import dropDown from '@aloe_vera/drop-down-func/package/nav-func';
import {
  navigationLinks,
  elementMovementOnCondition,
  moveElementFromOtherArrayToArray,
  populateElement,
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

const unorderedLinks = document.querySelector('ul[class="unordered_links"]');
const allNavListOfLinks = document.querySelectorAll('li[class="contain_link"]');
const moreUnorderedLinks = document.querySelector(
  'ul[class="more_unordered_links"]',
);

const navLinks = navigationLinks();
const anchorLinkWidths = navLinks.itsLinkWidthGetter();
navLinks.addNavigationListOfLinks(allNavListOfLinks);

window.addEventListener('resize', () => {
  elementMovementOnCondition({
    moveFunctions: moveElementFromOtherArrayToArray({
      navigationLinksArray: navLinks.navigationListOfLinksArray,
      moreNavigationLinksArray: navLinks.moreNavigationListOfLinksArray,
    }),
    navigationLinksWidth: unorderedLinks.clientWidth,
    navigationParentWidth: anchorLinkWidths.clientWidth,
    additionalValue: 100,
  }).move();

  populateElement({
    arrayOfElement: navLinks.navigationListOfLinksArray,
    parent: unorderedLinks,
  }).populate();

  populateElement({
    arrayOfElement: navLinks.moreNavigationListOfLinksArray,
    parent: moreUnorderedLinks,
  }).populate();
});
