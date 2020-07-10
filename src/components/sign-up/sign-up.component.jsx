import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { 
  auth,
  createUserDocument
 } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    console.log('SUBMITTED');

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);   
      await createUserDocument(user, { displayName });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2>Don't have an account yet?</h2>
        <span>Sign up by filling out the form.</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type='text'
            name='displayName'
            value={displayName} 
            label='Display Name'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            type='email'
            name='email'
            value={email} 
            label='Email'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            type='password'
            name='password'
            value={password} 
            label='Password'
            handleChange={this.handleChange}
            required
          />
          <FormInput 
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            label='Confirm Password'
            handleChange={this.handleChange}
            required
          />
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    )
  }
};

export default SignUp;