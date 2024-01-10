const navigationLinks = ({ navigationListLinksOnTheScreen, itsLink }) => {
  let anchorLinkWidth = 0;
  const navigationListOfLinksArray = [];
  const moreNavigationListOfLinksArray = [];

  // push all 'li' html element containing 'a' html element
  const addNavigationListOfLinks = () =>
    navigationListLinksOnTheScreen.forEach((navList) => {
      navigationListOfLinksArray.push(navList);
    });

  // get the client width of all 'a' html element
  const itsLinkWidthGetter = () =>
    itsLink.forEach((anchorLink) => {
      anchorLinkWidth += anchorLink.clientWidth;
    });

  return {
    anchorLinkWidth,
    navigationListOfLinksArray,
    moreNavigationListOfLinksArray,
    addNavigationListOfLinks,
    itsLinkWidthGetter,
  };
};

const populateElement =
  function provideArrayParameterWithArrayOfElementsContainingLinksYouWantSecondParameterToAppendChild({
    arrayOfElement,
    parent,
  }) {
    // append multiple children
    const populate = () =>
      arrayOfElement.forEach((element) => {
        parent.appendChild(element);
      });

    return {
      populate,
    };
  };

const moveElementFromOtherArrayToArray = ({
  navigationLinksArray,
  moreNavigationLinksArray,
}) => {
  const moveFromNavLinksToMoreNavLinks =
    function pushALinkFromNavigationLinksToMoreFromNavigationLinks() {
      if (
        navigationLinksArray.at(-1) === undefined ||
        navigationLinksArray.at(-1) === null
      ) {
        return 0;
      }
      return moreNavigationLinksArray.push(navigationLinksArray.pop());
    };

  const moveFromMoreLinksToNavLinks =
    function pushALinkFromMoreNavigationLinksToNavigationLinks() {
      if (
        moreNavigationLinksArray.at(-1) === undefined ||
        moreNavigationLinksArray.at(-1) === null
      ) {
        return 0;
      }
      return navigationLinksArray.push(moreNavigationLinksArray.pop());
    };

  return {
    moveFromMoreLinksToNavLinks,
    moveFromNavLinksToMoreNavLinks,
  };
};

const elementMovementOnCondition = ({
  moveFunctions,
  navigationLinksWidth,
  navigationParentWidth,
  additionalValue,
}) => {
  // move an element from this array to another array so they can be populated later
  const move = () => {
    if (navigationLinksWidth + additionalValue >= navigationParentWidth) {
      return moveFunctions.moveFromNavLinksToMoreNavLinks();
    }
    return moveFunctions.moveFromMoreLinksToNavLinks();
  };

  return {
    move,
  };
};

export {
  navigationLinks,
  populateElement,
  moveElementFromOtherArrayToArray,
  elementMovementOnCondition,
};
