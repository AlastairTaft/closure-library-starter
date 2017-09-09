import chai from 'chai'
import { isStartTimeInDeadArea } from './InteractiveLayer'

const expect = chai.expect

describe(`InteractiveLayer isStartTimeInDeadArea()`, () => {
  it(`should return true when start time is in dead area`, () => {
    const deadAreas = [
      { startTime: 90, endTime: 120 }
    ]

    var startTime = 100,
      length = 10

    expect(isStartTimeInDeadArea(deadAreas)(startTime, length)).to.be.true
  })

  it(`should return true when start intersects dead area`, () => {
    const deadAreas = [
      { startTime: 90, endTime: 120 }
    ]

    var startTime = 80,
      length = 20

    expect(isStartTimeInDeadArea(deadAreas)(startTime, length)).to.be.true
  })

  it(`should return true when start encompasses dead area`, () => {
    const deadAreas = [
      { startTime: 90, endTime: 120 }
    ]

    var startTime = 80,
      length = 50

    expect(isStartTimeInDeadArea(deadAreas)(startTime, length)).to.be.true
  })

  it(`should work with multiple dead areas`, () => {

    const deadAreas = [
      { startTime: 90, endTime: 120 },
      { startTime: 150, endTime: 160 },
    ]

    var startTime = 156,
      length = 2

    expect(isStartTimeInDeadArea(deadAreas)(startTime, length)).to.be.true
  })

  it(`should work when values match up exactly`, () => {
    const deadAreas = [
      { startTime: 90, endTime: 120 }
    ]

    var startTime = 90,
      length = 30

    expect(isStartTimeInDeadArea(deadAreas)(startTime, length)).to.be.true
  })

  it(`should return false when not in a dead area`, () => {
    const deadAreas = [
      {startTime: 180, endTime: 210 }
    ]

    var startTime = 90,
    length = 30

    expect(isStartTimeInDeadArea(deadAreas)(startTime, length)).to.be.false
  })
})