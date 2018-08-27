const addClass = (selector, className) => {
  if (selector instanceof Element) {
    selector.classList.add(className);
  } else {
    document.querySelectorAll(selector).forEach(item => {
      item.classList.add(className);
    })
  }
};
module.exports = addClass;