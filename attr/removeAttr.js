/**
 * 
 * @param {String} selector 
 * @param {String} attrName 
 * @param {*} value 
 */
const removeAttr = (selector, attrName) => {
  let selectorList = document.querySelectorAll(selector)
  if (selectorList.length) {
    selectorList.forEach(item => {
      item.removeAttribute(attrName);
    })
  }
}
module.exports = removeAttr;