

var DomHelper = function(){}

DomHelper.createElement = function(tagName, attributes, ...children){
  var ele = document.createElement(tagName, attributes)

  children.forEach(child => {
    if (child instanceof Element){
      ele.appendChild(child)
    } else {
      var text = document.createTextNode(child)
      ele.appendChild(text)
    }
  })
  return ele
}

export default DomHelper