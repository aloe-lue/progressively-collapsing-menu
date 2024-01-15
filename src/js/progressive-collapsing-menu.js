const arrayOfElements = () => {
  let totalWidth = 0;
  const elements = [];
  const moreElements = [];

  const addToElements = (elementsToAdd) => {
    elementsToAdd.forEach((element) => {
      elements.push(element);
    });
  };

  const getTotalWidth = (elementsWidth) => {
    elementsWidth.forEach((element) => {
      totalWidth += element.clientWidth;
    });
    return totalWidth;
  };

  return {
    elements,
    moreElements,
    addToElements,
    getTotalWidth,
  };
};

const arrayItemMover = ({ getFromHere, setItHere }) => {
  const moveArrayTo = () => {
    if (
      getFromHere.at(-1) === undefined ||
      getFromHere.at(-1) === null ||
      setItHere.at(-1) === undefined ||
      setItHere.at(-1) === null
    ) {
      return 0;
    }
    return setItHere.push(getFromHere.pop());
  };

  return {
    moveArrayTo,
  };
};

const arrayMove = ({
  moveToOne,
  moveToTwo,
  linksWidth,
  parentWidth,
  addValue,
}) => {
  const move = () => {
    if (linksWidth + addValue >= parentWidth) {
      return moveToOne.moveArrayTo();
    }
    return moveToTwo.moveArrayTo();
  };

  return {
    move,
  };
};

const populateElement = ({ arrayOfElement, parent }) => {
  const populate = () => {
    arrayOfElement.forEach((element) => {
      parent.appendChild(element);
    });
  };

  return {
    populate,
  };
};

export { arrayOfElements, arrayItemMover, arrayMove, populateElement };
