import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'
import injectStyles from 'react-jss'
import Actionables from './../Actionables'

const menuWidth = 290

const styles = {
  container: {
    width: menuWidth,
    backgroundColor: '#d6d6d6',
    position: 'fixed',
    top: 0,
    right: 0,
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
			  <Actionables />
			</div>}
		</Motion>
  }
}

export default injectStyles(styles)(SideMenu)
