/**
 * 
 * @param {String,Node,NodeList} selector 
 */

const {
  isElement,
  isNodeList
} = require('../common/index');

const remove = (selector) => {
  if (isElement(selector)) {
    selector.remove();
  } else {
    let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
    if (selectorList.length) {
      selectorList.forEach(item => {
        item.remove();
      })
    }
  }
};

module.exports = remove;