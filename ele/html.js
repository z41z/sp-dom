/**
 * 
 * @param {String,Node,NodeList} selector 
 * @param {*} html 
 */

const {
  isElement,
  isNodeList
} = require('../common/index');

const html = (selector, html) => {
  // html is not undefined, set new innerHTML
  if (html !== undefined) {
    if (isElement(selector)) {
      selector.innerHTML = html;
    } else {
      let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
      if (selectorList.length) {
        selectorList.forEach(item => {
          if (item.innerHTML !== undefined) {
            item.innerHTML = html;
          }
        })
      }
    }
  } else {
    // html is undefined,return first element innerHTML
    if (isElement(selector)) {
      return selector.innerHTML;
    } else {
      let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
      if (selectorList.length) {
        return selectorList[0].innerHTML;
      }
    }
  }
};

module.exports = html;