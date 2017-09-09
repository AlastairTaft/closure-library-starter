import React, { Component } from 'react'
import logo from './logo.svg'
import injectStyles from 'react-jss'
import Infographic from './../Infographic'
import DailyTimeline from './../DailyTimeline'
import { Provider } from 'react-redux'
import store from './../../store'

const styles = {
  app: {
    
  },
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "'Montserrat', sans-serif",
      backgroundColor: '#cccccc',
      color: '#525252',
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

const StyledApp = injectStyles(styles)(App)
const AppWithProvider = props => <Provider store={store}>
  <StyledApp />
</Provider>

export default AppWithProvider