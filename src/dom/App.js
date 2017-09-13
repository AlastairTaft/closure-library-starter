import dom from './../goog/dom/dom'

var App = function(){};

App.prototype.createDom = function(){
  element.appendChild(<div testAttribute="test">
    <p>Test</p>
    <h2>Header two</h2>
  </div>)
}

export default App