import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  AUTH_LOADING
} from '../actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true, isFetching: false }
      case AUTH_LOADING:
      return { ...state, error: '',  isFetching: true }
    case UNAUTH_USER:
      return { ...state, authenticated: false, isFetching: false }
    case AUTH_ERROR:
      return { ...state, error: action.payload, isFetching: false }
    case FETCH_MESSAGE:
      return { ...state, message: action.payload, isFetching: false }
  }

  return state
}
