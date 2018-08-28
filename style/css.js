const css = (selector, cssValue) => {
  let hasSetCssValue = cssValue !== undefined && cssValue instanceof Object;
  if (selector instanceof Element) {
    if (hasSetCssValue) {
      Object.keys(cssValue).forEach(item => {
        selector.style[item] = cssValue[item];
      })
    } else {
      return getComputedStyle(selector).getPropertyValue(cssValue);
    }
  } else {
    let selectorList = selector instanceof NodeList ? selector : document.querySelectorAll(selector);
    if (selectorList) {
      if (hasSetCssValue) {
        selectorList.forEach(item => {
          Object.keys(cssValue).forEach(i => {
            item.style[i] = cssValue[i];
          })
        })
      } else {
        return getComputedStyle(selectorList[0]).getPropertyValue(cssValue);
      }
    }
  }
};
module.exports = css;