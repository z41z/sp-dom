/**
 * 
 * @param {Node} selector 
 */
const isElement = (selector) => {
  return selector instanceof Element;
};

module.exports = isElement;