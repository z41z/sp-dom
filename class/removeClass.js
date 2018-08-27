const removeClass = (selector, className) => {
  document.querySelectorAll(selector).forEach(item => {
    item.classList.remove(className);
  })
};
module.exports = removeClass;