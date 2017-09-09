import React, { Component } from 'react'
import logo from './logo.svg'
import injectStyles from 'react-jss'
import Infographic from './../Infographic'
import DailyTimeline from './../DailyTimeline'
import { Provider } from 'react-redux'
import store from './../../store'
import SideMenu from './../SideMenu'
import { DragDropContext } from 'react-dnd'
//import HTML5Backend from 'react-dnd-html5-backend'
import MultiBackend from 'react-dnd-multi-backend'
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch'
import Header from './../Header'

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

  state = {
    actionablesOpen: false,
  };

  render() {
    const { classes } = this.props
    const { actionablesOpen } = this.state
    return <div className={classes.app}>
      <Header onHamburgerClick={() => this.setState({actionablesOpen: !actionablesOpen})} />
      {/*<Infographic />*/}
      <br /><br />
      <DailyTimeline />
      <br /><br />
      <SideMenu 
        open={actionablesOpen} 
        onClose={() => this.setState({actionablesOpen: false})}
      />
    </div>
  }
}

const StyledApp = injectStyles(styles)(App)
const AppWithProvider = props => <Provider store={store}>
  <StyledApp />
</Provider>

const AppWithDragDrop = DragDropContext(MultiBackend(HTML5toTouch))(AppWithProvider)


export default AppWithDragDrop