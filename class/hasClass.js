const hasClass = (selector, className) => {
  return document.querySelector(selector).classList.contains(className);
};
module.exports = hasClass;