import React, { Component } from 'react'
import injectStyles from 'react-jss'
import Task from './../Task'
import blockConfig from './../HourlyBlock/blockConfig'
import PropTypes from 'prop-types'
import TaskDropTarget from './../TaskDropTarget'

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    right: 2,
    left: 80 + 2,
    bottom: 0,
  },
  task: {
    position: 'absolute',
  },
}

class InteractiveLayer extends Component {

  static defaultProps = {
    deadAreas: [],
    dropAreas: [],
  };

  static propTypes = {
    deadAreas: PropTypes.arrayOf(PropTypes.shape({
      startTime: PropTypes.number, 
      endTime: PropTypes.number,
    })),
    dropAreas: PropTypes.arrayOf(PropTypes.shape({
      // In minutes
      startTime: PropTypes.number, 
      endTime: PropTypes.number,
    })),
  };

  state = {
    adding: false,
  };

  onClick = (e) => {

    const { deadAreas } = this.props

    var x = e.clientX, y = e.clientY
    var bounds = this.container.getBoundingClientRect()
    var yPos = y - bounds.top

    var height30min = blockConfig.height / 2

    // Snap to containing 30 minute block
    var blocksOf30 = Math.round(Math.floor(yPos / height30min))

    //var startTimeHours = Math.floor(blocksOf30 / 2),
    //  startTimeMinutes = Math.round((blocksOf30 / 2) % 1 * 60)
    var startTimeMinutes = blocksOf30 * 30

    if (isStartTimeInDeadArea(deadAreas)(startTimeMinutes, 30)){
      //debugger
      return
    }

    this.setState({
      adding: true,
      startTimeMinutes,
      blockLengthMinutes: 30,
      text: '',
    })
  };

  addTask = (text) => {
    const { addTask } = this.props
    const { startTimeMinutes, blockLengthMinutes } = this.state
    var startDate = new Date()
    startDate.setHours(0)
    startDate.setMinutes(0)
    startDate.setSeconds(0)
    startDate.setMilliseconds(0)
    startDate.setHours(Math.floor(startTimeMinutes / 60))
    startDate.setMinutes(((startTimeMinutes / 60) % 1) * 60)    
    var endDate = new Date(startDate.getTime())
    endDate.setMinutes(endDate.getMinutes() + blockLengthMinutes)
    addTask({
      text,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
    })
    this.setState({
      adding: false,
    })
  };

  render = () => {
    const { classes, dropAreas } = this.props
    const { adding, startTimeMinutes, blockLengthMinutes, text } = this.state

    const y = calculateYFromMinutes(startTimeMinutes)
    const height = blockConfig.height * (blockLengthMinutes / 60)

    return <div 
      className={classes.container} 
      onClick={this.onClick}
      ref={el => this.container = el}
    >
      {adding ? <Task 
        editable={true}
        height={height} 
        top={y} 
        ref={el => {
          // If there's no el then we are dismounting
          if (!el) return
          el.focus()
        }}
        onValueChange={this.addTask}
        text={text}
        className={classes.task}
      /> : null}
      {dropAreas.map(da => {
        const y = calculateYFromMinutes(da.startTime)
        const height = blockConfig.height * ((da.endTime - da.startTime) / 60)
        return <TaskDropTarget top={y} height={height} />
      })}
    </div>
  };
}

export default injectStyles(styles)(InteractiveLayer)

/**
 * This calculates the offset from the top that relates to the number of minutes
 * So if the minutes values is 60, this would return the height of a 1 hour 
 * block.
 * @param {Number} minutes
 * @return {Number}
 */
function calculateYFromMinutes(minutes){
  return minutes / 60 * blockConfig.height
}

/**
 * Figures out if a period intersects a dead area
 * @param {Array} deadAreas
 * @param {Number} startTimeMinutes
 * @param {Number} lengthMinutes
 */
export function isStartTimeInDeadArea(deadAreas){
  return function(startTime, length){
    var endTime = startTime + length
    return deadAreas.some(deadArea => {
      //console.log('deadArea.startTime < startTime && endTime < deadAreas.endTime',
      //  `${deadArea.startTime} <= ${startTime} && ${endTime} <= ${deadArea.endTime}`)
      if (deadArea.startTime <= startTime && endTime <= deadArea.endTime){
        //console.log(1)
        return true
      }

      if (deadArea.endTime > startTime && endTime < deadArea.endTime
        && startTime > deadArea.startTime){
        //console.log(2)
        return true
      }

      if (startTime < deadArea.startTime && endTime > deadArea.startTime){
        //console.log(3)
        return true
      }
    })
  }
}