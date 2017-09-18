var chai = require('chai')
var extractProvides = require('./extractProvides')

const expect = chai.expect

describe('extractProvides', () => {
  
  it(`should find the goog.provide and return the namespace`, () => {
    var testContent = `var test = 123
      goog.provide('goog.test')
    `
    expect(extractProvides(testContent)).to.deep.equal(['goog.test'])
  })

  it(`should find the both goog.provides`, () => {
    var testContent = `var test = 123
      goog.provide('goog.test')
      // Some other statement
      goog.provide('goog.test2')
    `
    expect(extractProvides(testContent)).to.deep.equal(['goog.test', 'goog.test2'])
  })
})