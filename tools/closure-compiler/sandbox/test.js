var fs = require('fs'),
  path = require('path')
const compile = require('google-closure-compiler-js').compile;

var code = fs.readFileSync(path.resolve(__dirname, 'main.js'), {encoding: 'UTF8'})
//console.log(code)
const flags = {
  jsCode: [{src: code}],
  compilationLevel: 'ADVANCED',
};
const out = compile(flags);
//console.info(out.compiledCode);  // will print 'var x = 3;\n'
fs.writeFileSync(
  path.resolve(__dirname, 'new.js'), 
  out.compiledCode, 
  {encoding: 'UTF8'}
) 