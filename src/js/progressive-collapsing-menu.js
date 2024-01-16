const arrayOfElements = () => {
  let totalWidth = 0;

  const elements = [];
  const moreElements = [];
  const elementsWidth = [];
  const moreElementsWidth = [];

  const addToElements = (elementsToAdd) => {
    elementsToAdd.forEach((element) => {
      elements.push(element);
    });
  };

  const addToElementsWidth = (elementsToAdd) => {
    elementsToAdd.forEach((element) => {
      elementsWidth.push(element.clientWidth);
    });
  };

  const computeTotalWidth = (elementsToAdd) => {
    elementsToAdd.forEach((element) => {
      totalWidth += element;
    });
    return totalWidth;
  };

  return {
    elements,
    moreElements,
    moreElementsWidth,
    elementsWidth,
    addToElements,
    addToElementsWidth,
    computeTotalWidth,
  };
};

const arrayItemMover = ({ arrayOne, arrayTwo }) => {
  const moveToArrayTwo = () => {
    if (arrayOne.at(-1) === undefined || arrayOne.at(-1) === null) {
      return 0;
    }
    return arrayTwo.push(arrayOne.pop());
  };

  const moveToArrayOne = () => {
    if (arrayTwo.at(-1) === undefined || arrayTwo.at(-1) === null) {
      return 0;
    }
    return arrayOne.push(arrayTwo.pop());
  };

  return {
    moveToArrayOne,
    moveToArrayTwo,
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

const subtractArrays = ({ arrayOne, arrayTwo }) => {
  let total = 0;
  const initialValue = 0;

  const reduceArrayValues = (array) =>
    array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );

  const subtractTwoArrays = () => {
    total = reduceArrayValues(arrayOne) - reduceArrayValues(arrayTwo);
    return total;
  };

  return { subtractTwoArrays };
};

const itemMover = ({
  moveElement,
  moveNumber,
  linksWidth,
  parentWidth,
  addValue,
}) => {
  const move = () => {
    if (linksWidth + addValue >= parentWidth) {
      moveElement.moveToArrayTwo();
      moveNumber.moveToArrayTwo();
    }
    moveElement.moveToArrayOne();
    moveNumber.moveToArrayOne();
  };

  return {
    move,
  };
};

export {
  arrayOfElements,
  arrayItemMover,
  itemMover,
  populateElement,
  subtractArrays,
};
