import './assets/component-one/style.css';
import dropDown from '@aloe_vera/drop-down-func/package/nav-func';

window.addEventListener('load', () => {
  const moreLinks = document.querySelectorAll('a[data-more-menu-link]');

  dropDown({
    elementToListen: moreLinks,
    itsDataAttribute: 'data-more-menu-link',
    subElement: 'div[data-more-link-inside',
    classListValue: 'visible',
    togglerClassListValue: 'active-toggler',
    closerToggler: '#main_container',
  }).dropDownElement();
});
