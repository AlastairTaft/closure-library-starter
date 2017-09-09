import React, { Component } from 'react'

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
    this.setState({ value: e.target.value })
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
    
    return <textarea 
      ref={el => this.textarea = el}
      onKeyDown={this.onKeyDown} 
      onInput={this.onInput}
      onBlur={this.onBlur}
    >
      {value}
    </textarea>
  }
}

export default TextCapture