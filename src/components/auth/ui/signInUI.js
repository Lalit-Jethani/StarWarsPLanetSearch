import React, { PropTypes } from 'react'

const signInUI = props => {
    const {handleSubmit, email,password,renderAlert} = props;
  return (
   
      <form
        className='Planetcontainer'
        onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}
      >
        <fieldset className='form-group'>
          <label>Username:</label>
          <input {...email} className='form-control' />
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input {...password} type='password' className='form-control' />
        </fieldset>
        {renderAlert()}
        <button action='submit' className='btn btn-primary'>Sign in</button>
      </form>
 
  );
}

signInUI.propTypes = {}

export default signInUI
