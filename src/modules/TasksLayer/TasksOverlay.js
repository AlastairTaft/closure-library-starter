/**
 * This renders an overlay over the timeline to render all the tasks
 */
import React, { Component } from 'react'
import injectStyles from 'react-jss'
import Task from './../Task'
import blockConfig from './../HourlyBlock/blockConfig'

const styles = {
  overlay: {
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    left: 80 + 2,
    right: 2,
    bottom: 0,
  },
  task: {
    position: 'absolute',
  },
}

class TimelineOverlay extends Component {

  static defaultProps = {
    tasks: [],
  };

  render = () => {
    const { tasks, classes } = this.props
    return <div className={classes.overlay}>
      {tasks.map(t => {

        const startDate = new Date(t.startDate)
        const endDate = new Date(t.endDate)
        // The minutes passed since start of the day
        const startMinutes = getMinutesPassed(startDate)
        const endMinutes = getMinutesPassed(endDate)

        var top = startMinutes * blockConfig.height / 60
        var height = (endMinutes - startMinutes)  * blockConfig.height / 60
        return <Task 
          key={t.id} 
          text={t.text} 
          height={height} 
          top={top} 
          className={classes.task}
        />
      })}
    </div>
  }
}

/**
 * Get the minutes that have passed since the start of the day
 * @param {Date} date 
 */
function getMinutesPassed(date){
  return date.getHours() * 60 + date.getMinutes()
}

export default injectStyles(styles)(TimelineOverlay)
