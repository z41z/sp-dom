/**
 * 
 * @param {String} selector 
 * @param {String} attrName 
 * @param {*} value 
 */
const removeAttr = (selector, attrName) => {
  if (selector instanceof Element) {
    selector.removeAttribute(attrName);
  } else {
    let selectorList = document.querySelectorAll(selector)
    if (selectorList) {
      selectorList.forEach(item => {
        item.removeAttribute(attrName);
      })
    }
  }
}
module.exports = removeAttr;