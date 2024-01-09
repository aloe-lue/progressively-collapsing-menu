const navigationLinks = [];
const moreNavigationLinks = [];

const navigationMethods = ({ moreNavLinks, navLinks }) => {
  const moveELementToMoreNav = () => moreNavLinks.push(navLinks.pop());
  const moveMoreElementToNav = () => navLinks.push(moreNavLinks.pop());

  return {
    moveELementToMoreNav,
    moveMoreElementToNav,
  };
};

/**
 * Todo: create an if statement within a function that will make the navigation methods be used whenw there is an overflowing or fit element
 * Todo: create a dom function for navigation links array that recieve a parameter for html element for appending a child purposely for showing an element to their respective parent
 * todo: create a dom function for more navigation links array that recieve a parameter for html element for appending a child purposely for showing an element to their respective parent
 *
 * ? note: moving an element to other is easy. you could do it with 'appendChild'
 */
