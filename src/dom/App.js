//import dom from './../goog/dom/dom'


require('./../customGoogBase')

var dom = require('goog.dom')
var DomHelper = require('goog.dom.DomHelper')
var array = require('goog.array')

array.forEach([1,2,3], (i) => console.log(i))

var App = function(){
  this.dom_ = new DomHelper()
};

App.prototype.render = function(element){
  element.appendChild(<div testAttribute="test">
    <p>Test</p>
    <h2>Header two</h2>
  </div>)
}


export default App