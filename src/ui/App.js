goog.require('goog.ui.Component')

// This commented out version is the ES5 way of declaring a class it works
// but so does the ES6 way.
/*var App = function(){
  Control.call(this)
};
goog.inherits(App, Control)*/

/*App.prototype.createDom = function(element){
  this.element_ = <div>
    <h1>Test</h1>
  </div>
}*/

class App extends goog.ui.Component {
  createDom(element){
    this.element_ = this.dom_.createDom('div', null, 
      this.dom_.createDom('h1', null, this.dom_.createTextNode('Using the closure library')),
      this.dom_.createDom('p', null, this.dom_.createTextNode('This example was created using a custom class that inherits from the `goog.ui.Control` class.'))
    )
  }
}

export default App