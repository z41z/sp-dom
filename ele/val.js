/**
 * 
 * @param {String,Node,NodeList} selector 
 * @param {*} val 
 */

const {
  isElement,
  isNodeList
} = require('../common/index');

const val = (selector, val) => {
  // val is not undefined, set new value
  if (val !== undefined) {
    if (isElement(selector) && selector.value !== undefined) {
      selector.value = val;
    } else {
      let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
      if (selectorList.length) {
        selectorList.forEach(item => {
          if (item.value !== undefined) {
            item.value = val;
          }
        })
      }
    }
  } else {
    // val is undefined,return first element value
    if (isElement(selector) && selector.value !== undefined) {
      return selector.value;
    } else {
      let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
      if (selectorList.length && selectorList[0].value != undefined) {
        return selectorList[0].value;
      }
    }
  }
};

module.exports = val;