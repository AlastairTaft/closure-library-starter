import React, { Component } from 'react'
import logo from './logo.svg'
import injectStyles from 'react-jss'
import Infographic from './../Infographic'
import DailyTimeline from './../DailyTimeline'
import { Provider } from 'react-redux'
import store from './../../store'
import SideMenu from './../SideMenu'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

const styles = {
  app: {
    
  },
  '@global': {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: "'Montserrat', sans-serif",
      backgroundColor: '#f3f3f3',
      color: '#525252',
    },
  },
}


class App extends Component {
  render() {
    const { classes } = this.props
    return <div className={classes.app}>
      <Infographic />
      <br /><br />
      <DailyTimeline />
      <br /><br />
      <SideMenu />
    </div>
  }
}

const StyledApp = injectStyles(styles)(App)
const AppWithProvider = props => <Provider store={store}>
  <StyledApp />
</Provider>

const AppWithDragDrop = DragDropContext(HTML5Backend)(AppWithProvider)


export default AppWithDragDrop