import chai from 'chai'
import { limitToFirstNewLine } from './TextCapture'

const expect = chai.expect

// Not in use, was replaced with a simpler solution
xdescribe(`TextCapture => limitToFirstNewLine()`, () => {
  it(`should remove all but the first occurance of new lines`, () => {
    
    const str = `Test
line 2 
line 3.`

    const expectedResult = `Test
line 2 line 3.`

    expect(limitToFirstNewLine(str)).to.equal(expectedResult)

  })
})