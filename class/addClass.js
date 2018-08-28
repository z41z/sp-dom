/**
 * 
 * @param {String,Node,Nodelist} selector 
 * @param {*} className 
 */

const {
  isElement,
  isNodeList
} = require('../common/index');

const addClass = (selector, className) => {
  if (isElement(selector)) {
    selector.classList.add(className);
  } else {
    let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
    if (selectorList) {
      selectorList.forEach(item => {
        item.classList.add(className);
      })
    }
  }
};
module.exports = addClass;