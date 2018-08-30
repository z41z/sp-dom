/**
 * 
 * @param {*} selector 
 */

const {
  isElement,
  isNodeList
} = require('../common/index');

const select = (selector) => {
  if (isElement(selector)) {
    return selector;
  } else {
    return isNodeList(selector) ? selector : document.querySelectorAll(selector);
  }
};

module.exports = select;