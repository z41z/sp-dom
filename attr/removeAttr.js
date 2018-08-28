/**
 * 
 * @param {String} selector 
 * @param {String} attrName 
 * @param {*} value 
 */

const {
  isElement,
  isNodeList
} = require('../common/index');

const removeAttr = (selector, attrName) => {
  if (isElement(selector)) {
    selector.removeAttribute(attrName);
  } else {
    let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
    if (selectorList) {
      selectorList.forEach(item => {
        item.removeAttribute(attrName);
      })
    }
  }
}
module.exports = removeAttr;