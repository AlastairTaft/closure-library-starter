import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import Task from './../Task'

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1rem',
  marginBottom: '1rem',
  cursor: 'move',
};

const boxSource = {
  beginDrag() {
    return {};
  },
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
})

class ActionableTask extends Component {
  static propTypes = {
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    showCopyIcon: PropTypes.bool,
  };

  render() {
    const { isDragging, connectDragSource, showCopyIcon } = this.props;
    const opacity = isDragging ? 0.4 : 1;
    const dropEffect = showCopyIcon ? 'copy' : 'move';

    return connectDragSource(
      /*<Task style={{ ...style, opacity }}>
        When I am over a drop zone, I have {showCopyIcon ? 'copy' : 'no'} icon.
      </Task>*/
      <div>
        <Task text="Go to the gym" editable={false} />
      </div>,
      { dropEffect },
    );
  }
}


export default DragSource('Task', boxSource, collect)(ActionableTask)

