const removeClass = (selector, className) => {
  if (selector instanceof Element) {
    selector.classList.remove(className);
  }
  else{
    document.querySelectorAll(selector).forEach(item => {
      item.classList.remove(className);
    })
  }
};
module.exports = removeClass;