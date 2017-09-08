import React, { Component } from 'react'
import logo from './logo.svg'
import injectStyles from 'react-jss'
import Infographic from './../Infographic'
import DailyTimeline from './../DailyTimeline'

const styles = {
  app: {
    '@global': {
      body: {
        margin: 0,
        padding: 0,
        fontFamily: 'sans-serif',
      },
    },
  },
}


class App extends Component {
  render() {
    const { classes } = this.props
    return <div className={classes.app}>
      <Infographic />
      <DailyTimeline />
    </div>
  }
}

export default injectStyles(styles)(App)

