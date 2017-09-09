import React, { Component } from 'react'
import blockConfig from './../HourlyBlock/blockConfig'
import injectStyles from 'react-jss'
import HourlyBlock from './../HourlyBlock'
import TimelineOverlay from './../TimelineOverlay'

const styles = {
  container: {
    position: 'relative',
    height: blockConfig.height * 24,
    border: '1px solid red',
  },
}


const timeBlocks = [
  '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', 
  '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', 
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
]

class DailyTimeline extends Component {
  render = () => {
    const { classes } = this.props
    return <div className={classes.container}>
      Daily Time Line
      {timeBlocks.map(block => <HourlyBlock startHour={block} />)}
      <TimelineOverlay />
    </div>
  }
}

export default injectStyles(styles)(DailyTimeline)
