import React, { Component } from 'react'
import injectStyles from 'react-jss'
import Task from './ActionableTask'
import { DragSource } from 'react-dnd'

const styles = {
  header: {
    height: 60,
    backgroundColor: '#363636',
    color: '#969696',
    lineHeight: '60px',
    textAlign: 'center',
    '@global': {
      h2: {
        margin: 0,
      },
    },
  },
  content: {
    padding: 20,
    boxSizing: 'border-box',
  },
}

class Actionables extends Component {
  render = () => {
    const { classes } = this.props
    return <div>
      <div className={classes.header}>
        <h2>Actionables</h2>
      </div>
      <div className={classes.content}>
        <div style={{position: 'relative'}}>
          <Task text="Go to the gym" />
          <Task text="Go to the gym 2" />
          <Task text="Go to the gym 3" />
        </div>
      </div>
    </div>
  }
}

export default injectStyles(styles)(Actionables)
