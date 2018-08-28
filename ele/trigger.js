/**
 * 
 * @param {String,Node,NodeList} selector 
 * @param {String} eventName 
 */

const {
  isElement,
  isNodeList
} = require('../common/index');

const trigger = (selector, eventName) => {
  let event = document.createEvent('HTMLEvents');
  // eventName,stopPropagation,preventDefault
  event.initEvent(eventName, true, true);
  event.eventType = 'message';
  if (isElement(selector)) {
    selector.dispatchEvent(event);
  } else {
    let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
    if (selectorList.length) {
      selectorList.forEach(item => {
        item.dispatchEvent(event);
      })
    }
  }
};

module.exports = trigger;