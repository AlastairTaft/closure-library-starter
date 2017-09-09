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
  close: {
    position: 'absolute',
    top: 18,
    right: 18,
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

    var { open, classes, onClose } = this.props
    // For testing

    return <Motion defaultStyle={{x: open ? 0 : -(menuWidth)}} style={{x: spring( open ? 0 : -(menuWidth))}}>
		  {value => <div className={classes.container} style={{right: value.x}}>
        <svg 
          onClick={onClose}
          className={classes.close}
          fill="#969696" 
          height="24" 
          viewBox="0 0 24 24" 
          width="24"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
			  <Actionables />
			</div>}
		</Motion>
  }
}

export default injectStyles(styles)(SideMenu)
