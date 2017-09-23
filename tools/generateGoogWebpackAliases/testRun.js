var run = require('./index')

var args = process.argv.slice(2)

var libFolder = args[0]

console.log(run(libFolder))