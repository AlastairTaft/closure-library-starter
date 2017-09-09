import React, { Component } from 'react'
import InteractiveLayer from './InteractiveLayer'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import shortid from 'shortid'

const mapStateToProps = (state) => {
  // Pass in dead areas, these are areas that already have tasks so new ones
  // can't be added
  return {
    deadAreas: Object.keys(state.tasks).map(k => state.tasks[k]).map(t => ({
      startTime: (new Date(t.startDate)).getHours() * 60 + (new Date(t.startDate)).getMinutes(),
      endTime: (new Date(t.endDate)).getHours() * 60 + (new Date(t.endDate)).getMinutes(),
    })),
    dropAreas: [
      { startTime: 0, endTime: 30 },
    ],
  }
}

class InteractiveLayerContainer extends Component {

  static contextTypes = {
    store: PropTypes.object,
  };

  addTask = (task) => {
    const { store } = this.context
    store.dispatch({
      type: 'ADD_TASK',
      ...task,
      id: shortid.generate(),
    })
  };

  render = () => {
    
    return <InteractiveLayer 
      {...this.props} 
      addTask={this.addTask}
    />
  }
}

export default connect(mapStateToProps)(InteractiveLayerContainer)
