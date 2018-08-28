/**
 * 
 * @param {String,Node,NodeList} selector 
 * @param {*} text 
 */

const {
  isElement,
  isNodeList
} = require('../common');

const text = (selector, text) => {
  // text is not undefined, set new innerText
  if (text !== undefined) {
    if (isElement(selector) && selector.innerText !== undefined) {
      selector.innerText = text;
    } else {
      let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
      if (selectorList.length) {
        selectorList.forEach(item => {
          if (item.innerText !== undefined) {
            item.innerText = text;
          }
        })
      }
    }
  } else {
    // text is undefined,return first element innerText
    if (isElement(selector) && selector.innerText !== undefined) {
      return selector.innerText;
    } else {
      let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
      if (selectorList.length && selectorList[0].innerText != undefined) {
        return selectorList[0].innerText;
      }
    }
  }
};

module.exports = text;