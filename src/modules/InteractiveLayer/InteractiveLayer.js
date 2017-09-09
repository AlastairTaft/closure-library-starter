import React, { Component } from 'react'
import injectStyles from 'react-jss'
import Task from './../Task'
import blockConfig from './../HourlyBlock/blockConfig'

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
}

class InteractiveLayer extends Component {

  state = {
    adding: false,
  };

  onClick = (e) => {
    var x = e.clientX, y = e.clientY
    var bounds = this.container.getBoundingClientRect()
    var yPos = y - bounds.top

    var height30min = blockConfig.height / 2

    // Snap to containing 30 minute block
    yPos = Math.round(Math.floor(yPos / height30min) * height30min)
    
    this.setState({
      adding: true,
      y: yPos,
      height: height30min,
      text: '',
    })
  };

  addTask = (text) => {
    
    this.setState({
      adding: false,
    })
  };

  render = () => {
    const { classes } = this.props
    const { adding, y, height, text } = this.state
    return <div 
      className={classes.container} 
      onClick={this.onClick}
      ref={el => this.container = el}
    >
      {adding ? <Task 
        editable={true} 
        style={{top: y, height }} 
        ref={el => {
          // If there's no el then we are dismounting
          if (!el) return
          el.focus()
        }}
        onValueChange={this.addTask}
        text={text}
      /> : null}
    </div>
  };
}

export default injectStyles(styles)(InteractiveLayer)
