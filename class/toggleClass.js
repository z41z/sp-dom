const toggleClass = (selector, className) => {
  document.querySelectorAll(selector).forEach(item => {
    item.classList.toggle(className);
  })
};
module.exports = toggleClass;