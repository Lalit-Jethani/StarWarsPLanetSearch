import axios from 'axios'
import {
    browserHistory
} from 'react-router'
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE,
    AUTH_LOADING
} from './types'

const ROOT_URL = 'https://swapi.co/api/'

export function signinUser({
    email,
    password
}) {
    return function(dispatch) {
        // Submit email/password to the server

        if (!email || !password) {
            dispatch(authError('Username / password cannot be left empty'))
        } else {
          dispatch({type:AUTH_LOADING});
            axios
                .get(`${ROOT_URL}people/?search=${email}`, {
                    email,
                    password
                })
                .then(response => {
                    if (
                        response.data.results[0].name == email &&
                        response.data.results[0].birth_year == password
                    ) {
                        // If request is good...
                        // - Update state to indicate user is authenticated
                        dispatch({
                            type: AUTH_USER
                        })

                        localStorage.setItem('token', 'response.data.fakeToken')
                        sessionStorage.setItem('username', email)
                        // - redirect to the route '/feature'
                        browserHistory.push('/feature')
                    } else {
                        dispatch(authError('Incorrect Username or Password'))
                    }
                })
                .catch(() => {
                    // If request is bad...
                    // - Show an error to the user
                    dispatch(
                        authError(
                            'Please use  a valid character from STAR WARS as the username'
                        )
                    )
                })
        }
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token')

    return {
        type: UNAUTH_USER
    }
}

export function fetchMessage() {
    return function(dispatch) {
        axios
            .get(ROOT_URL, {
                headers: {
                    authorization: localStorage.getItem('token')
                }
            })
            .then(response => {
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: response.data.message
                })
            })
    }
}