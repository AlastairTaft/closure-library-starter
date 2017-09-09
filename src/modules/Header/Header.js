import React, { Component } from 'react'
import injectStyles from 'react-jss'

const styles = {
  header: {
    backgroundColor: 'white',
    height: 60,
    textAlign: 'center',
    lineHeight: '60px',
    '@global': {
      h1: {
        margin: 0,
      },
    },
  }, 
  hamburger: {
    position: 'absolute',
    top: 18,
    right: 18,
  },
}

class Header extends Component {
  render = () => {
    const { classes, onHamburgerClick } = this.props
    return <div className={classes.header}>
      <h1>Today</h1>
      <svg 
        onClick={onHamburgerClick} 
        className={classes.hamburger} 
        fill="#000000" 
        height="24" 
        viewBox="0 0 24 24" 
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
    </div>
  }
}

export default injectStyles(styles)(Header)
