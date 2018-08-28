/**
 * 
 * @param {String,Node,NodeList} selector 
 * @param {String} findSelector 
 */

const {
  isElement,
  isNodeList
} = require('../common/index');
const find = (selector, findSelector) => {
  let result = [];
  if (isElement(selector)) {
    result = selector.querySelectorAll(findSelector);
  } else {
    let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
    if (selectorList.length) {
      selectorList.forEach(item => {
        let itemChildren = item.querySelectorAll(findSelector);
        if (itemChildren.length) {
          itemChildren.forEach(i => {
            result.push(i);
          })
        }
      })
    }
  }
  return result;
};

module.exports = find;