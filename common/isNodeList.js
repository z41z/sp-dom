/**
 * 
 * @param {NodeList} selector 
 */
const isNodeList = (selector) =>{
  return selector instanceof NodeList;
};

module.exports = isNodeList;