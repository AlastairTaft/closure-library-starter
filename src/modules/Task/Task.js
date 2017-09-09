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
    boxSizing: 'border-box',
    marginTop: 8,
    marginBottom: 0,
    backgroundColor: '#e4de3e',
    color: 'white',
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 2,
    paddingRight: 2,
  },
}

class TaskContainer extends Component {
  
  render = () => {
    
    var { classes, style, height, top } = this.props
    
    // Allow pixels for a margin
    style = { 
      height: height -8,
      top: top - 3,
    }

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
    
    const { text, style, height, top, editable, onValueChange } = this.props
    
    return <StyledContainer style={style} height={height} top={top}>
      <TextCapture 
        value={text} 
        onValueChange={onValueChange}
        ref={el => this.textCapture = el} 
      />
    </StyledContainer> 
  }
}

export default Task