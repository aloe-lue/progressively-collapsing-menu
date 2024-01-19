const menuLinks = [];
const menuLinksWidths = [];

const getMenuLinks =
  function pushAllOfYourMenuLinksThatYouWantToControlLaterWithFillMenulinks({
    elements,
  }) {
    const pushAll = () =>
      elements.forEach((element) => {
        menuLinks.push(element);
        menuLinksWidths.push(element.clientWidth);
      });

    return { pushAll };
  };

const getAllElements =
  function removeEachTtmlElementEveryTimeTheScreenSizeChanges({ elements }) {
    const removeEach = () =>
      elements.forEach((element) => {
        element.remove();
      });

    return { removeEach };
  };

const populateElement = ({ array, max, moreMenu, parent }) => {
  const populateDropDown =
    function appendMultipleHtmlElementRemainingInTheMenuLinksArray() {
      return array.forEach((element) => {
        parent.appendChild(element);
      });
    };

  const populateAllMenuLinks =
    function appendAllMenuLinksElementsButRemoveMoreMenulinks() {
      return array.slice(0, max).forEach((link) => {
        parent.appendChild(link);
        moreMenu.remove();
      });
    };

  const populateRemainingLinks =
    function appendAllRemainingMenuLinksElementsbutAppendMoreMenuLinks() {
      return array.slice(0, max).forEach((link) => {
        parent.appendChild(link);
        parent.appendChild(moreMenu);
      });
    };

  return {
    populateAllMenuLinks,
    populateRemainingLinks,
    populateDropDown,
  };
};

const menuLinksCalculation = () => {
  const getAverageWidth = (array, arrayLength) =>
    array.reduce((accu, currVal) => accu + currVal, 0) / arrayLength.length;

  const getMaxTabs = (average, addValue) =>
    window.innerWidth / (average + addValue);

  const getExcessElements = (array, arrayLength, max) =>
    array.slice(-(arrayLength, max));

  return {
    getAverageWidth,
    getMaxTabs,
    getExcessElements,
  };
};

const fillMenuLinksCalculation = menuLinksCalculation();

const fillMenuLinks = ({
  menuLinksParent,
  moreMenuLinksElement,
  moreMenuLinkToggler,
  adjustIt = 0,
}) => {
  const averageMenuLinksWidth = fillMenuLinksCalculation.getAverageWidth(
    menuLinksWidths,
    menuLinks,
  );

  const maxTabs = fillMenuLinksCalculation.getMaxTabs(
    averageMenuLinksWidth,
    adjustIt,
  );

  const getAllExcessMenuLinks = fillMenuLinksCalculation.getExcessElements(
    menuLinks,
    menuLinks.length,
    maxTabs,
  );

  const filltabs =
    function fillMenuLinksWithConditionOtherwiseJustfillWhatItCanFill() {
      if (maxTabs >= menuLinks.length) {
        return populateElement({
          array: menuLinks,
          max: maxTabs,
          parent: menuLinksParent,
          moreMenu: moreMenuLinkToggler,
        }).populateAllMenuLinks();
      }

      populateElement({
        array: getAllExcessMenuLinks,
        parent: moreMenuLinksElement,
      }).populateDropDown();

      return populateElement({
        array: menuLinks,
        max: maxTabs,
        parent: menuLinksParent,
        moreMenu: moreMenuLinkToggler,
      }).populateRemainingLinks();
    };

  return {
    filltabs,
  };
};

export { getMenuLinks, getAllElements, fillMenuLinks };
