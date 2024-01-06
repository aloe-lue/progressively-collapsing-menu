/**
 *
 * @param { header links } menuLinks
 * @param { header nav > ul } menuLinksParent
 * @param { Number } widthBeforeItTells
 * @returns true || false
 */

const WHENTOCOLLAPSE =
  function tellsWhenTheMenuItemsIsGreaterInSizeOrEqualInSizeThanItsMenuParents(
    menuLinks,
    menuLinksParent,
    widthBeforeItTells = 0,
  ) {
    let allMenuLinksInWidth = 0;
    const menuLinksParentWidth = menuLinksParent.clientWidth;

    menuLinks.forEach((link) => {
      allMenuLinksInWidth += link.clientWidth;
    });

    // less widthBeforeItTells value would mean late reaction
    return allMenuLinksInWidth + widthBeforeItTells >= menuLinksParentWidth;
  };

const MENULINKS = () => {
  // we'll be adding these with Elements
  // eslint-disable-next-line prefer-const
  let menuLinks = [];

  const linkAdder = function addMenuLinks(link) {
    return menuLinks.push(link);
  };

  const linkRemover = function removeLastMenuLink() {
    return menuLinks.pop();
  };

  const lastMenuLinkGetter = function getLastMenuLinks() {
    return menuLinks.slice(-1).at(-1);
  };

  return {
    linkAdder,
    linkRemover,
    lastMenuLinkGetter,
  };
};

export { WHENTOCOLLAPSE, MENULINKS };
