import React, { Container } from 'react'
import Actionables from './Actionables'

const mapStateToProps = (state) => ({
  actionabes: state.actionables,
})

export default connect(mapStateToProps)(Actionables)
