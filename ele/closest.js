/**
 * 
 * @param {String,Node} selector 
 * @param {String} closestSelector 
 */

const {
  isElement
} = require('../common/index');

const closest = (selector, closestSelector) => {
  if (isElement(selector)) {
    return selector.closest(closestSelector);
  } else {
    let ele = document.querySelector(selector);
    if (ele) {
      return ele.closest(closestSelector);
    }
  }
};

module.exports = closest;