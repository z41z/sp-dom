const addClass = (selector, className) => {
  document.querySelectorAll(selector).forEach(item => {
    item.classList.add(className);
  })
};
module.exports = addClass;