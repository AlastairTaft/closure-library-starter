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
    }
  };

  onInput = (e) => {
    this.setState({ value: e.target.innerText })
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
    const { value } = this.state
    
    return <StyledTextArea 
      ref={el => this.textarea = ReactDOM.findDOMNode(el)}
      onKeyDown={this.onKeyDown} 
      onInput={this.onInput}
      onBlur={this.onBlur}
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
    const {classes, ...otherProps} = this.props
    return <p {...otherProps} className={classes.textArea} contentEditable={true}>
      {this.initialChildren}
    </p>
  }
}

const StyledTextArea = injectStyles(styles)(TextArea)
  

export default TextCapture
