/**
 * 
 * @param {String,NodeList,Node} selector 
 */
const {
  isElement,
  isNodeList
} = require('../common/index');

const toggle = (selector) => {
  if (isElement(selector)) {
    selector.style.display = getComputedStyle(selector).display === 'none' ? 'block' : 'none';
  } else {
    let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
    if (selectorList.length) {
      selectorList.forEach(item => {
        item.style.display = getComputedStyle(item).display === 'none' ? 'block' : 'none';
      })
    }
  }
};

module.exports = toggle;