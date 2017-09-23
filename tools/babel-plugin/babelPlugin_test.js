var babel = require("babel-core")
var babylon = require('babylon')
var chai = require('chai')

const expect = chai.expect

describe(`babelPlugin`, () => {
  it(`should convert the goog namespaces`, () => {

    var input = `goog.require('goog.array')
goog.provide('goog.dom')
console.log('test')`

    var expectedOutput = `var goog = require('goog'),
    localGoog = {};

localGoog.array = require("goog.array").array;
module.exports = localGoog;
localGoog.dom = localGoog.dom || {};

console.log('test');`


    var options = {
      plugins: [require('./googPlugin.js')],
    }

    const ast1 = babylon.parse(input, options);
    const { code, map, ast } = babel.transformFromAst(ast1, input, options);

    expect(code).to.equal(expectedOutput)

  })

  it(`should ensure previous namespaces are set`, () => {
    
    var input = `goog.provide('goog.debug.Debug')`

    var expectedOutput = `var goog = require('goog'),
    localGoog = {};

module.exports = localGoog;
localGoog.debug = localGoog.debug || {};
localGoog.debug.Debug = localGoog.debug.Debug || {};`


    var options = {
      plugins: [require('./googPlugin.js')],
    }

    const ast1 = babylon.parse(input, options);
    const { code, map, ast } = babel.transformFromAst(ast1, input, options);

    expect(code).to.equal(expectedOutput)

  })

  it(`should tack on the namespace minus the good for require statements`, () => {
    var input = `var myImport = require('goog.array')`

    var expectedOutput = `var goog = require('goog'),
    localGoog = {};

var myImport = require('goog.array').array;`

    var options = {
      plugins: [require('./googPlugin.js')],
    }

    const ast1 = babylon.parse(input, options);
    const { code, map, ast } = babel.transformFromAst(ast1, input, options);

    expect(code).to.equal(expectedOutput)
  })

  it(`should remove all instances of goog.scope as this isn't compatible with
    webpack, and the functionality it brings is not needed with CommonJS 
    module loading`.replace(/\s+/g, ' '), () => {

      var input = `goog.scope(function(){
var something = "test";     
});`
      
      var expectedOutput = `var goog = require("goog"),
    localGoog = {};`
  
      var options = {
        plugins: [require('./googPlugin.js')],
      }
  
      const ast1 = babylon.parse(input, options);
      const { code, map, ast } = babel.transformFromAst(ast1, input, options);
  
      expect(code).to.equal(expectedOutput)

  })

  it(`should remove instances of goog.define as we're not using the global
    scope, it also isn't compatible with webpack`.replace(/\s+/g, ' '), () => {
    
    var input = `goog.define('goog.asserts.ENABLE_ASSERTS', goog.DEBUG);`
    var expectedOutput = `var goog = require('goog'),
    localGoog = {};`

    var options = {
      plugins: [require('./googPlugin.js')],
    }

    const ast1 = babylon.parse(input, options);
    const { code, map, ast } = babel.transformFromAst(ast1, input, options);

    expect(code).to.equal(expectedOutput)
  })

  it(`should remove preceeding comment if removing a node else closure's jsdoc
    understanding will apply to the next statement`, () => {

    var input = `/**
 * @define {string} Path to the transpiler.  Executing the script at this
 * path (relative to base.js) should define a function $jscomp.transpile.
 */
goog.define('goog.TRANSPILER', 'transpile.js');
if (goog.DEPENDENCIES_ENABLED) {}`

    var expectedOutput = `var goog = require('goog'),
    localGoog = {};

if (goog.DEPENDENCIES_ENABLED) {}`

    var options = {
      plugins: [require('./googPlugin.js')],
    }

    const ast1 = babylon.parse(input, options);
    const { code, map, ast } = babel.transformFromAst(ast1, input, options);

    expect(code).to.equal(expectedOutput)

  })

  it(`should remove the defined comment and the define code`, () => {

    var input = `/**
  * @define {boolean} DEBUG is provided as a convenience so that debugging code
  * that should not be included in a production. It can be easily stripped
  * by specifying --define goog.DEBUG=false to the Closure Compiler aka
  * JSCompiler. For example, most toString() methods should be declared inside an
  * "if (goog.DEBUG)" conditional because they are generally used for debugging
  * purposes and it is difficult for the JSCompiler to statically determine
  * whether they are used.
  */
goog.define('goog.DEBUG', true);`

var expectedOutput = `var goog = require('goog'),
    localGoog = {};`

    var options = {
      plugins: [require('./googPlugin.js')],
    }

    const ast1 = babylon.parse(input, options);
    const { code, map, ast } = babel.transformFromAst(ast1, input, options);

    expect(code).to.equal(expectedOutput)

  })

  it(`should remove the defined comment and the define code`, () => {
    
        var input = `goog.forwardDeclare('goog.events.EventWrapper');`
    
    var expectedOutput = `var goog = require('goog'),
    localGoog = {};`
    
        var options = {
          plugins: [require('./googPlugin.js')],
        }
    
        const ast1 = babylon.parse(input, options);
        const { code, map, ast } = babel.transformFromAst(ast1, input, options);
    
        expect(code).to.equal(expectedOutput)
    
      })

})