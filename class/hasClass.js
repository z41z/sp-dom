const hasClass = (selector, className) => {
  if (selector instanceof Element) {
    return selector.classList.contains(className);
  }
  return document.querySelector(selector).classList.contains(className);
};
module.exports = hasClass;