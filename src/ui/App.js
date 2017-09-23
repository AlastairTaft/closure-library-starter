var Component = require('goog.ui.Component')

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

class App extends Component {
  createDom(element){
    this.element_ = <div>
      <h1>Using the closure library</h1>
      <p>
        This example was created using a custom class that inherits from
        the `goog.ui.Control` class.
      </p>
    </div>
  }
}


export default App