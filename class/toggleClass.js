const toggleClass = (selector, className) => {
  if (selector instanceof Element) {
    selector.classList.toggle(className);
  } else {
    let selectorList = document.querySelectorAll(selector);
    if (selectorList) {
      selectorList.forEach(item => {
        item.classList.toggle(className);
      })
    }
  }
};
module.exports = toggleClass;