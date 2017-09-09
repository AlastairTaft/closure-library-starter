/**
 * Renders a task.
 * 
 * Note: We have to do something wierd with two components here. This is so we 
 * can export a component with 'focus()' instance method and still use
 * react-jss. Because react-jss wraps the exported component so you lose the 
 * instance methods.
 */
import React, { Component } from 'react'
import injectStyles from 'react-jss'
import TextCapture from './../TextCapture'

const styles = {
  task: {
    position: 'absolute',
    width: '100%',
    minHeight: 10,
    border: '1px solid green',
    boxSizing: 'border-box',
  },
}

class TaskContainer extends Component {
  
  render = () => {
    
    const { classes, style } = this.props
    
    return <div className={classes.task} style={style}>
      {this.props.children}
    </div> 
  }
}

const StyledContainer = injectStyles(styles)(TaskContainer)

class Task extends Component {
  
  focus = () => {
    this.textCapture.focus()
  };

  render = () => {
    
    const { text, style, editable, onValueChange } = this.props
    
    return <StyledContainer style={style}>
      <TextCapture 
        value={text} 
        onValueChange={onValueChange}
        ref={el => this.textCapture = el} 
      />
    </StyledContainer> 
  }
}

export default Task