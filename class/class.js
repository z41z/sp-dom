const eclass = (selector) => {
  if (selector instanceof Element) {
    return selector.className;
  }
  return document.querySelector(selector).className;
}
module.exports = eclass;