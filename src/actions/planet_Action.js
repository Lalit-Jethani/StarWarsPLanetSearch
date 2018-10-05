import axios from 'axios'
import { REQUEST_PLANETS, RECIEVE_PLANETS } from './types'

const ROOT_URL = 'https://swapi.co/api/'

function requestItems () {
  return {
    type: REQUEST_PLANETS,
    payload: { isfetching: true }
  }
}

export default function fetchPlanets (searchString) {
  return function (dispatch) {
    dispatch(requestItems())
    axios
      .get(`${ROOT_URL}planets/?search=${searchString}`)
      .then(response => {
        dispatch({
          type: RECIEVE_PLANETS,
          payload: { response: response.data, isfetching: false }
        })
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        // dispatch(authError('Bad Login Info'));
      })
  }
}
