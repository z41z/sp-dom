/**
 * 
 * @param {String,Node} selector 
 * @param {String} className 
 */

const {
  isElement
} = require('../common/index');

const hasClass = (selector, className) => {
  if (isElement(selector)) {
    return selector.classList.contains(className);
  }
  let selectorEle = document.querySelector(selector);
  if (selectorEle) {
    return selectorEle.classList.contains(className);
  }
};
module.exports = hasClass;