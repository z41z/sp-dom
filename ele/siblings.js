/**
 * 
 * @param {String,Node,NodeList} selector 
 */

const {
  isElement,
  isNodeList
} = require('../common/index');

const siblings = (selector) => {
  let result = [];
  if (isElement(selector)) {
    let siblings = selector.parentNode.childNodes;
    if (siblings.length) {
      siblings.forEach(item => {
        if (item.nodeType === 1 && item !== selector) {
          result.push(item)
        }
      })
    }
    return result;
  } else {
    let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
    if (selectorList.length) {
      selectorList.forEach(item => {
        let siblings = item.parentNode.childNodes;
        if (siblings.length > 1) {
          siblings.forEach((i, index) => {
            if (i.nodeType === 1 && index !== 0) {
              if (result.indexOf(i) < 0) {
                result.push(i);
              }
            }
          })
        }
      })
    }
    return result;
  }
};

module.exports = siblings;