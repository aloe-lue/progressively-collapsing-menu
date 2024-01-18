const menuLinks = [];

const getMenuLinks = ({ navigationLinks }) => {
  const pushAll = () =>
    navigationLinks.forEach((link) => {
      menuLinks.push(link);
    });

  return { pushAll };
};

const getAllElements = ({ allElements }) => {
  const removeThem = () =>
    allElements.forEach((element) => {
      element.remove();
    });

  return { removeThem };
};

const populateElement = () => {
  const populateDropDown = function addToDropDownElements(
    multipleElements,
    parent,
  ) {
    multipleElements.forEach((element) => {
      parent.appendChild(element);
    });
  };

  const populateMenuLinks =
    function appendAllMenuLinksElementsButRemoveMoreMenulinks(
      array,
      max,
      moreMenu,
      parent,
    ) {
      array.slice(0, max).forEach((link) => {
        parent.appendChild(link);
        moreMenu.remove();
      });
    };

  const populateRemainingLinks =
    function appendAllRemainingMenuLinksElementsbutAppendMoreMenuLinks(
      array,
      max,
      parent,
      moreMenu,
    ) {
      return array.slice(0, max).forEach((link) => {
        parent.appendChild(link);
        parent.appendChild(moreMenu);
      });
    };

  return {
    populateMenuLinks,
    populateRemainingLinks,
    populateDropDown,
  };
};

const fillMenuLinks = ({
  moreMenuLinks,
  moreMenuLinkElement,
  averageLinksWidth,
}) => {
  const maxTabs = Math.floor(window.innerWidth / averageLinksWidth);
  const getAllExcessMenuLinks = menuLinks.slice(-(menuLinks.length - maxTabs));

  // append all menuLinks elements but remove more menu links
  if (maxTabs >= menuLinks.length) {
    return menuLinks.slice(0, maxTabs).forEach((link) => {
      menuLinks.appendChild(link);
      moreMenuLinkElement.remove();
    });
  }

  // add to drop down links
  getAllExcessMenuLinks.forEach((link) => {
    moreMenuLinks.appendChild(link);
  });

  // append all remaining menuLinks elements but append more menu links to its
  return menuLinks.slice(0, maxTabs).forEach((link) => {
    menuLinks.appendChild(link);
    menuLinks.appendChild(moreMenuLinkElement);
  });
};

export { getMenuLinks, getAllElements, fillMenuLinks };
