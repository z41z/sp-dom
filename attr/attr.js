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

const attr = (selector, attrName, value) => {
  if (isElement(selector)) {
    if (value !== undefined) {
      selector.setAttribute(attrName, value);
    } else {
      return selector.getAttribute(attrName);
    }
  } else {
    let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
    if (selectorList) {
      if (value !== undefined) {
        selectorList.forEach(item => {
          item.setAttribute(attrName, value);
        })
      } else {
        return selectorList[0].getAttribute(attrName);
      }
    } else {
      return null;
    }
  }
};

module.exports = attr;