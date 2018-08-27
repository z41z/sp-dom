const eclass = (selector) => {
  if (selector instanceof Element) {
    return selector.className;
  }
  let selectorEle = document.querySelector(selector);
  if(selectorEle){
    return selectorEle.className;
  }
}
module.exports = eclass;