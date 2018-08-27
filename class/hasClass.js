const hasClass = (selector, className) => {
  if (selector instanceof Element) {
    return selector.classList.contains(className);
  }
  let selectorEle = document.querySelector(selector);
  if (selectorEle) {
    return selectorEle.classList.contains(className);
  }
};
module.exports = hasClass;