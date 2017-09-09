import React, { Component } from 'react'
import injectStyles from 'react-jss'
import TextCapture from './../TextCapture'
import blockConfig from './blockConfig'

const styles = {
  block: {
    height: blockConfig.height,
    boxSizing: 'border-box',
    position: 'relative',
  },
  margin: {
    width: 80,
    display: 'inline-block',
    lineHeight: '16px',
    position: 'relative',
    top: -8,
    textAlign: 'right',
    paddingRight: 5,
    boxSizing: 'border-box',
  },
  ruleContainer: {
    paddingLeft: 80,
    position: 'absolute',
    top: -1.5,
    left: 0,
    width: '100%',
  },
  rule: {
    position: 'relative',
    height: 3,
    backgroundColor: 'white',
    width: '100%',
  },
}

class HourlyBlock extends Component {
  render = () => {
    const { classes, startHour } = this.props
    return <div className={classes.block}>
      <div className={classes.margin}>
        {startHour}
      </div>
      <div className={classes.ruleContainer}>
        <div className={classes.rule}>
        </div>
      </div>
      {/*<div className={classes.content}>
        <TextCapture />
      </div>*/}
    </div>
  }
}

export default injectStyles(styles)(HourlyBlock)
