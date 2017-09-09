import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import blockConfig from './../HourlyBlock/blockConfig'
import injectStyles from 'react-jss'
import classNames from 'classnames'

const styles = {
  dropTarget: {
    height: (blockConfig.height / 2) - 8,
    position: 'relative',
    width: '100%',
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
    opacity: 0,
    top: -3,
  },
}

const boxTarget = {
  drop(props, monitor, component) {
    var item = monitor.getItem()
    component.onDrop(item)
  },
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
})


class TaskDropTarget extends Component {

  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
  };

  onDrop = (item) => {
    const { onDrop } = this.props
    onDrop({
      text: item.text,
      keyColour: item.keyColour,
    })
  };

  render() {
    const { connectDropTarget, ...otherProps } = this.props
    return connectDropTarget(<div>
      <StyledInnerDropTarget {...otherProps} />
    </div>);
  }
}

class InnerDropTarget extends Component {
  render = () => {

    const { 
      canDrop, 
      isOver, 
      connectDropTarget, 
      className, 
      classes,
      top,
      height, 
    } = this.props
    
    const isActive = canDrop && isOver
    const style = { 
      top: top -3, // See the task for these measurements, TODO Make this a Task element 
      height: height - 8, 
      opacity: isActive ? 0.5 : undefined,
    }

   return <div style={style} className={classNames(classes.dropTarget, className)}>
      {/*isActive ?
        'Release to drop' :
        'Drag item here'
      */}
    </div>
  }
}
const StyledInnerDropTarget = injectStyles(styles)(InnerDropTarget)

export default DropTarget('Task', boxTarget, collect)(TaskDropTarget)