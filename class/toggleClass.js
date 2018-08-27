const toggleClass = (selector, className) => {
  if (selector instanceof Element) {
    selector.classList.toggle(className);
  }
  else{
    document.querySelectorAll(selector).forEach(item => {
      item.classList.toggle(className);
    })
  }
};
module.exports = toggleClass;