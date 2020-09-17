import React, { useState } from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import FormInput from '../form-input/form-input.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { SignInContainer, ButtonsContainer } from './sign-in.styles';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });

  // set state with input value at dynamic key using input name
  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({...userCredentials, [name]: value });
  };

  const { email, password } = userCredentials;

  const handleSubmit = event => {
    event.preventDefault();
    emailSignInStart(email, password);
  }

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password.</span>
      <br />
      <form onSubmit={handleSubmit}>
        <FormInput 
          type='email'
          name='email'
          value={email}
          label='email'
          handleChange={handleChange}
        />
        <FormInput 
            type='password'
            name='password'
            value={password}
            label='password'
            handleChange={handleChange}
        />
        <ButtonsContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton  type='button' onClick={googleSignInStart} isGoogleSignIn >
            Sign in With Google
          </CustomButton>          
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
