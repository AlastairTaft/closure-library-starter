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
import classNames from 'classnames'
import blockConfig from './../HourlyBlock/blockConfig'

const styles = {
  task: {
    position: 'relative',
    width: '100%',
    minHeight: 10,
    boxSizing: 'border-box',
    marginTop: 8,
    marginBottom: 0,
    backgroundColor: '#e4de3e',
    color: 'white',
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 2,
    paddingRight: 2,
  },
}

class TaskContainer extends Component {
  
  static defaultProps = {
    height: blockConfig.height / 2,
  };

  render = () => {
    
    var { classes, style, height, top, className } = this.props
    
    // Allow pixels for a margin
    style = { 
      height: height -8,
      top: top - 3,
    }

    return <div className={classNames(classes.task, className)} style={style}>
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
    
    const { 
      text, 
      style, 
      height, 
      top, 
      editable, 
      onValueChange,
      className,
    } = this.props
    
    return <StyledContainer 
      style={style} 
      height={height} 
      top={top}
      className={className}
    >
      <TextCapture 
        value={text} 
        onValueChange={onValueChange}
        ref={el => this.textCapture = el} 
        editable={editable}
      />
    </StyledContainer> 
  }
}

export default Task