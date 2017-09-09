import React, { Container } from 'react'
import Actionables from './Actionables'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  actionables: Object.keys(state.actionables).map(a => state.actionables[a]),
})

export default connect(mapStateToProps)(Actionables)
