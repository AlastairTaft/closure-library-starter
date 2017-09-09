import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import injectStyles from 'react-jss'

class TextCapture extends Component {

  static defaultProps = {
    onValueChange: function(){},
  };

  state = {
    value: this.props.value || '',
  };

  componentWillReceiveProps = (newProps) => {
    if (typeof newProps.value !== 'undefined')
      this.setState({ value: newProps.value })
  };

  onKeyDown = (e) => {
    const { onValueChange } = this.props
    const { value } = this.state
    
    if (e.keyCode == 13 && e.shiftKey !== true){
      e.preventDefault()
      this.textarea.blur()
      //return onValueChange(value)
    } else if (e.keyCode == 13){
      // Don't allow a new line if there's already one, i.e. limit to 2 lines
      if (value.indexOf('\n') !== -1){
        e.preventDefault()
        return
      }
    }
  };

  onInput = (e) => {
    
    var value = e.target.innerText
    // Allow only one line break
    //value = limitToFirstNewLine(value)
    this.setState({ value })
  }

  onBlur = (e) => {
    const { onValueChange } = this.props
    const { value } = this.state
    onValueChange(value)
  };

  focus = () => {
    this.textarea.focus()
  };

  render = () => {
    const { editable } = this.props
    const { value } = this.state
    
    return <StyledTextArea 
      ref={el => this.textarea = ReactDOM.findDOMNode(el)}
      onKeyDown={this.onKeyDown} 
      onInput={this.onInput}
      onBlur={this.onBlur}
      editable={editable}
    >
      {value}
    </StyledTextArea>
  }
}


const styles = {
  textArea: {
    border: 'none',
    overflow: 'auto',
    outline: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    resize: 'none',
    color: 'inherit',
    margin: 0,
    whiteSpace: 'pre',
    minWidth: 5, // Required so the cursor shows when there's no content
  },
}

class TextArea extends Component {

  constructor(props){
    super(props)
    this.initialChildren = props.children
  }

  render = () => {
    const {classes, editable, ...otherProps} = this.props
    return <p 
      {...otherProps} 
      className={classes.textArea} 
      contentEditable={editable === false ? false : true}
    >
      {this.initialChildren}
    </p>
  }
}

const StyledTextArea = injectStyles(styles)(TextArea)
  

export default TextCapture


// Deprecated found simpler solution using keyDown
/**
 * Replaces all but the first occurance of a new line in a string
 * @param {String} str
 * @returns {String}
 */
/*export function limitToFirstNewLine(str){
  var first = true
  return str.replace(/(\n)/g, function(match, group1){ //group in accordance with RE
    if (first) {
      first = false
      return match
    }
    return ''
  })
}*/