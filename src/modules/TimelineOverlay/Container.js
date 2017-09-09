import React, { Component } from 'react'
import TimelineOverlay from './TimelineOverlay'
import { connect } from 'react-redux'

const mapStateToProps = (state, props) => ({
  tasks: Object.keys(state.tasks).map(k => state.tasks[k]),
})

class TimelineOverlayContainer extends Component {
  render = () => {
    return <TimelineOverlay {...this.props} />
  }
}

export default connect(mapStateToProps)(TimelineOverlayContainer)
