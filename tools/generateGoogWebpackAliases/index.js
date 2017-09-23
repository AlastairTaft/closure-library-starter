var fs = require('fs')
var path = require('path')
var extractProvides = require('./extractProvides')

/**
 * Generates an object of aliases so that webpack can resolve 
 */
function run(libraryFolder){

  var aliases = {}

  var files = walkSync(libraryFolder)
  files.forEach(f => {
    var content = fs.readFileSync(f, { encoding: 'UTF8' })
    var namespaces = extractProvides(content)
    namespaces.forEach(n => aliases[n] = f)
  })
  return aliases
}


function walkSync(dir) {
  return fs.statSync(dir).isDirectory()
    ? Array.prototype.concat(...fs.readdirSync(dir).map(f => walkSync(path.join(dir, f))))
    : dir;
}


module.exports = run