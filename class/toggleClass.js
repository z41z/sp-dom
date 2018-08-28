/**
 * 
 * @param {String,Node,NodeList} selector 
 * @param {String} className 
 */

const {
  isElement,
  isNodeList
} = require('../common/index');

const toggleClass = (selector, className) => {
  if (isElement(selector)) {
    selector.classList.toggle(className);
  } else {
    let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
    if (selectorList) {
      selectorList.forEach(item => {
        item.classList.toggle(className);
      })
    }
  }
};
module.exports = toggleClass;