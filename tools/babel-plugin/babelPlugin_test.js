var babel = require("babel-core")
var babylon = require('babylon')
var chai = require('chai')

const expect = chai.expect

describe(`babelPlugin`, () => {
  it(`should convert the goog namespaces`, () => {

    var input = `goog.require('goog.array')
goog.provide('goog.dom')
console.log('test')`

    var expectedOutput = `goog.array = require("goog.array").array;
module.exports = goog;
goog.dom = goog.dom || {};

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

    var expectedOutput = `module.exports = goog;
goog.debug = goog.debug || {};
goog.debug.Debug = goog.debug.Debug || {};`


    var options = {
      plugins: [require('./googPlugin.js')],
    }

    const ast1 = babylon.parse(input, options);
    const { code, map, ast } = babel.transformFromAst(ast1, input, options);

    expect(code).to.equal(expectedOutput)

  })

  it(`should tack on the namespace minus the good for require statements`, () => {
    var input = `var myImport = require('goog.array')`

    var expectedOutput = `var myImport = require('goog.array').array;`

    var options = {
      plugins: [require('./googPlugin.js')],
    }

    const ast1 = babylon.parse(input, options);
    const { code, map, ast } = babel.transformFromAst(ast1, input, options);

    expect(code).to.equal(expectedOutput)
  })
})