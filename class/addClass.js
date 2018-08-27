const addClass = (selector, className) => {
  if (selector instanceof Element) {
    selector.classList.add(className);
  } else {
    let selectorList = document.querySelectorAll(selector);
    if (selectorList) {
      selectorList.forEach(item => {
        item.classList.add(className);
      })
    }
  }
};
module.exports = addClass;