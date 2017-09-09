import React, { Component } from 'react'
import InteractiveLayer, { isStartTimeInDeadArea } from './InteractiveLayer'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import shortid from 'shortid'

const mapStateToProps = (state) => {
  // Pass in dead areas, these are areas that already have tasks so new ones
  // can't be added

  var deadAreas = Object.keys(state.tasks).map(k => state.tasks[k]).map(task => {
    
    var startDate = new Date(task.startDate),
      endDate = new Date(task.endDate)

    var startTime = startDate.getHours() * 60 + startDate.getMinutes(),
      endTime = endDate.getHours() * 60 + endDate.getMinutes()

    return { startTime, endTime }
  })

  console.log(deadAreas)
  // The easiest (but least efficient) way to create the blocks of drop areas 
  // is to iterate through every 30 minute block and check if it intersects 
  // with a dead area
  var dropAreas = []
  for (var startTime = 0; startTime < 1440; startTime += 30){
    var dropArea = { startTime, endTime: startTime + 30 }
    console.log(startTime, 30)
    console.log(isStartTimeInDeadArea(deadAreas)(startTime, 30))
    if (!isStartTimeInDeadArea(deadAreas)(startTime, 30))
      dropAreas.push(dropArea)
  }

  return {
    deadAreas,
    dropAreas,
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
