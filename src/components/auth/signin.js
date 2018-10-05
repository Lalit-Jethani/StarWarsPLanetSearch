import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'
import signInUI from '../auth/ui/signInUI'
import Loader from '../Loader/Loader'

class Signin extends Component {
  handleFormSubmit ({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password })
  }

  constructor (props) {
    super(props)
  }

  renderAuthForm = () =>{
    const { handleSubmit, fields: { email, password } } = this.props
    return (
      <form
          className='Planetcontainer'
          onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
        >
         <div className="row">
         <div className='form-group col-lg-8'>
           <h4>Enter a valid star wars character name as user and birthyear as password</h4>
           </div>
          </div>
         <div className="row">
          <div className='form-group col-lg-4'>
            <label>Username:</label>
            <input {...email}  />
          </div>
          </div>
          <div className="row">
          <div className='form-group col-lg-4'>
            <label>Password:</label>
            <input {...password} type='password' />
          </div>
          </div>
          <div className="row">
          <div className='form-group col-lg-4'>
          {this.renderAlert()}
          <button action='submit' className='btn btn-primary'>Sign in</button>
          </div>
          </div>
         
        </form>
    )
  }



  renderAlert = () =>{
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render () {
    console.log(this.props);
    const {isLoading} = this.props;
    return (
      <div>
        {
          isLoading ? 
          (
            <div className="container">
            <Loader/>
            {this.renderAuthForm()}
            </div>
          ) :
          (this.renderAuthForm())
        }
       
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { errorMessage: state.auth.error, isLoading : state.auth.isFetching }
}

export default reduxForm(
  {
    form: 'signin',
    fields: ['email', 'password']
  },
  mapStateToProps,
  actions
)(Signin)
