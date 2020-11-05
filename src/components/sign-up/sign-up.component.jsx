import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { ImportantText } from '../../global.styles';

import { 
  SignUpContainer,
  SignUpForm
} from './sign-up.styles';

const SignUp = ({ signUpStart }) => {

  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    signUpStart({ displayName, email, password });
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setUserCredentials({...userCredentials, [name]: value });
  }

  return (
    <SignUpContainer>
      <h2>Don't have an account yet?</h2>
      <ImportantText>Sign up</ImportantText>
      &nbsp;by filling out the form.
      <SignUpForm onSubmit={handleSubmit}>
        <FormInput 
          type='text'
          name='displayName'
          value={displayName} 
          label='display name'
          handleChange={handleChange}
          required
        />
        <FormInput 
          type='email'
          name='email'
          value={email} 
          label='email'
          handleChange={handleChange}
          required
        />
        <FormInput 
          type='password'
          name='password'
          value={password} 
          label='password'
          handleChange={handleChange}
          required
        />
        <FormInput 
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          label='confirm Password'
          handleChange={handleChange}
          required
        />
        <CustomButton 
          type='submit'
          className='sign-in-sign-up-btn' 
          isPrimary
        >
          Sign Up
        </CustomButton>
      </SignUpForm>
    </SignUpContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
