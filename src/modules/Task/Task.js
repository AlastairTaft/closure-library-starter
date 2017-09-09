import React, { Component } from 'react'
import injectStyles from 'react-jss'

const styles = {
  task: {
    position: 'absolute',
    width: '100%',
    minHeight: 10,
    border: '1px solid green',
    boxSizing: 'border-box',
  },
}

class Task extends Component {
  render = () => {
    
    const { classes, text, style } = this.props
    
    return <div className={classes.task} style={style}>
      {text}
    </div> 
  }
}

export default injectStyles(styles)(Task)
