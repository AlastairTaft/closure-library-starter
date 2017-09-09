import React, { Component } from 'react'
import blockConfig from './../HourlyBlock/blockConfig'
import injectStyles from 'react-jss'
import HourlyBlock from './../HourlyBlock'
import TasksLayer from './../TasksLayer'
import InteractiveLayer from './../InteractiveLayer'

const styles = {
  container: {
    position: 'relative',
    height: blockConfig.height * 24,
  },
}


const timeBlocks = [
  '12am', '1am', '2am', '3am', '4am', '5am', 
  '6am', '7am', '8am', '9am', '10am', '11am', 
  '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
  '6pm', '7pm', '8pm', '9pm', '10pm', '11pm',
]

class DailyTimeline extends Component {
  render = () => {
    const { classes } = this.props
    return <div className={classes.container}>
      {timeBlocks.map(block => <HourlyBlock startHour={block} />)}
      <TasksLayer />
      <InteractiveLayer />
    </div>
  }
}

export default injectStyles(styles)(DailyTimeline)
