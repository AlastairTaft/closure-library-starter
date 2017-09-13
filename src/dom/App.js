import DomHelper from './DomHelper'

var App = function(){};

App.prototype.render = function(element){
  element.appendChild(<div testAttribute="test">
    <p>Test</p>
    <h2>Header two</h2>
  </div>)
}

export default App