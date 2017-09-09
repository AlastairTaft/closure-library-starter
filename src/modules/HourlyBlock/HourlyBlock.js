import React, { Component } from 'react'
import injectStyles from 'react-jss'
import TextCapture from './../TextCapture'
import blockConfig from './blockConfig'

const styles = {
  block: {
    border: '1px solid blue',
    height: blockConfig.height,
  },
  margin: {
    width: 40,
    display: 'inline-block',
  },
  content: {
    display: 'inline-block',
    position: 'relative',
  },
}

class HourlyBlock extends Component {
  render = () => {
    const { classes, startHour } = this.props
    return <div className={classes.block}>
      <div className={classes.margin}>
        {startHour}
      </div>
      <div className={classes.content}>
        <TextCapture />
      </div>
    </div>
  }
}

export default injectStyles(styles)(HourlyBlock)
