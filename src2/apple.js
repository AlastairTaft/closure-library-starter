

console.log('apple loaded')

var orange = require('./orange.js')

var apple = {}

apple['getColour'] = function(){
  return 'Green'
}

apple['getType'] = function(){
  return 'Granny Smith'
}

export default apple