import React, { Component, PropTypes } from 'react'
import { connect, Dispatch } from 'react-redux'
import Search from '../search/search'
import { bindActionCreators } from 'redux'
import planetAction from '../../actions/planet_Action'
import PlanetList from '../planetList/planetList'

import Loader from '../Loader/Loader'

class planetListContainer extends Component {
  constructor (props) {
    super(props)
    this.counterforLimit = 0

    this.handleChange = this.handleChange.bind(this)
    this.state = { planets: {}, isFetching: false }
  }

  componentDidMount () {
    this.props.getPlanets()
  }

  handleSearchLimit = searchStr => {
    if (this.counterforLimit == 0) {
      setTimeout(() => {
        this.counterforLimit = 0
        console.log('cleared')
      }, 60000)
    }
    if (sessionStorage.getItem('username') !== 'Luke Skywalker') {
      if (this.counterforLimit != 15) {
        this.getPlanets(searchStr)
      } else {
        alert(
          'You have exceeded the maximum of  search queries. please try again in a minute'
        )
      }
    } else {
      this.getPlanets(searchStr)
    }
  }

  getPlanets (searchStr) {
    if (searchStr) this.props.getPlanets(searchStr)
    this.counterforLimit++
  }

  handleChange = searchStr => {
    this.handleSearchLimit(searchStr)
  }

  render () {
    const planets = this.props.planetList
    return (
      <div className='Planetcontainer'>
        <Search onChange={this.handleChange} />

        {planets != undefined
          ? this.props.isFetching == true
              ? <Loader />
              : <PlanetList items={planets} />
          : <div />}

      </div>
    )
  }
}

planetListContainer.propTypes = {
  searchStr: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isFetching: PropTypes.bool,
  dispatch: PropTypes.func
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getPlanets: planetAction }, dispatch)
}

function mapStateToProps (state) {
  return {
    planetList: state.planet.planets,
    isFetching: state.planet.isFetching
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(planetListContainer)
