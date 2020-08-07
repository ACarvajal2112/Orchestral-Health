import React from 'react';

import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }
  // set state with input value at dynamic key using input name
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password.</span>
        <br />
        <form>
          <FormInput 
            type='email'
            name='email'
            value={this.state.email}
            label='email'
            handleChange={this.handleChange}
          />
          <FormInput 
             type='password'
             name='password'
             value={this.state.password}
             label='password'
             handleChange={this.handleChange}
          />
          <div className='buttons-container'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton  type='button' onClick={signInWithGoogle} isGoogleSignIn >
              Sign in With Google
            </CustomButton>          
          </div>
        </form>
      </div>
    )
  }
};

export default SignIn;
