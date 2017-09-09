import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import injectStyles from 'react-jss'

const menuWidth = 290

const styles = {
  container: {
    width: menuWidth,
    height: 100,
    backgroundColor: 'blue',
    position: 'fixed',
    top: 0,
    right: 0,
  },
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
}

class SideMenu extends Component {

  componentDidMount = () => {
		window.addEventListener('orientationchange', this.doUpdate)
		window.addEventListener('resize', this.doUpdate)
	};

	componentDidUnmount = () => {
		window.removeEventListener('orientationchange', this.doUpdate)
		window.removeEventListener('resize', this.doUpdate)
	};

	doUpdate = () => {
		this.forceUpdate()
	};

  render = () => {

    var { open, classes } = this.props
    // For testing
    open = true

    return <Motion defaultStyle={{x: open ? 0 : -(menuWidth)}} style={{x: spring( open ? 0 : -(menuWidth))}}>
		  {value => <div className={classes.container}>
			  <div className={classes.header}>
          <h2>Actionables</h2>
        </div>
			</div>}
		</Motion>
  }
}

export default injectStyles(styles)(SideMenu)
