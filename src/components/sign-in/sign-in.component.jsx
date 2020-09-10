import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import FormInput from '../form-input/form-input.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import { SignInContainer, ButtonsContainer } from './sign-in.styles';

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

  handleSubmit = event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  }

  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password.</span>
        <br />
        <form onSubmit={this.handleSubmit}>
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
          <ButtonsContainer>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton  type='button' onClick={googleSignInStart} isGoogleSignIn >
              Sign in With Google
            </CustomButton>          
          </ButtonsContainer>
        </form>
      </SignInContainer>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
