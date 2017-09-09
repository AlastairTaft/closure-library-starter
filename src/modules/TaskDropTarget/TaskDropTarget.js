import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DropTarget } from 'react-dnd'
import blockConfig from './../HourlyBlock/blockConfig'

const style = {
  border: '1px solid purple',
  height: blockConfig.height / 2,
  width: '100%',
  padding: '2rem',
  textAlign: 'center',
};

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
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    return connectDropTarget(
      <div style={style}>
        {isActive ?
          'Release to drop' :
          'Drag item here'
        }
      </div>,
    );
  }
}

export default DropTarget('Task', boxTarget, collect)(TaskDropTarget)