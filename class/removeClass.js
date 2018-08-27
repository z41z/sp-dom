const removeClass = (selector, className) => {
  if (selector instanceof Element) {
    selector.classList.remove(className);
  } else {
    let selectorList = document.querySelectorAll(selector);
    if (selectorList) {
      selectorList.forEach(item => {
        item.classList.remove(className);
      })
    }
  }
};
module.exports = removeClass;