/**
 * 
 * @param {String,Node} selector 
 */

const {
  isElement
} = require('../common/index');

const eclass = (selector) => {
  if (isElement(selector)) {
    return selector.className;
  }
  let selectorEle = document.querySelector(selector);
  if (selectorEle) {
    return selectorEle.className;
  }
}
module.exports = eclass;