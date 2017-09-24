

console.log('apple loaded')

import orange from './orange.js'

var apple = {}

apple['getColour'] = function(){
  return 'Green'
}

apple['getType'] = function(){
  return 'Granny Smith'
}

export default apple