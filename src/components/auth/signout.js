import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signout extends Component {
  componentWillMount () {
    this.props.signoutUser()
  }

  render () {
    return (
      <div className='Planetcontainer'>
        Sorry to see you go...Click on Sign in to log in
      </div>
    )
  }
}

export default connect(null, actions)(Signout)
