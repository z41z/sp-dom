/**
 * 
 * @param {String} selector 
 * @param {String} attrName 
 * @param {*} value 
 */
const attr = (selector, attrName, value) => {
  let selectorList = document.querySelectorAll(selector)
  if (selectorList.length) {
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
module.exports = attr;