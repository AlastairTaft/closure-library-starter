import React, { Component } from 'react'
import TasksOverlay from './TasksOverlay'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => ({
  tasks: Object.keys(state.tasks).map(k => state.tasks[k]),
})

class TasksOverlayContainer extends Component {
  render = () => {
    return <TasksOverlay {...this.props} />
  }
}

export default connect(mapStateToProps)(TasksOverlayContainer)
