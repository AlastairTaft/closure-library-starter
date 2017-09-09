import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import blockConfig from './../HourlyBlock/blockConfig'
import injectStyles from 'react-jss'
import classNames from 'classnames'

const styles = {
  dropTarget: {
    border: '1px solid purple',
    height: blockConfig.height / 2,
    width: '100%',
    textAlign: 'center',
    boxSizing: 'border-box',
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

  render() {
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
    const style = { top, height }

    return connectDropTarget(
      <div style={style} className={classNames(classes.dropTarget, className)}>
        {isActive ?
          'Release to drop' :
          'Drag item here'
        }
      </div>,
    );
  }
}

const StyledDropTarget = injectStyles(styles)(TaskDropTarget)
export default DropTarget('Task', boxTarget, collect)(StyledDropTarget)