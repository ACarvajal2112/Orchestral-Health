import styled, { css } from 'styled-components';

// shared styles for active pseudo class
const activeButtonStyles = css`
  box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.7);
`;

// common styles shared among primary, secondary & google-sign-in buttons
const sharedBtnStyles = css`
  padding: 10px 5px;
  color: #fff;
`;

// styles for primary button when enabled
const primaryBtnEnabledStyles = css`
  background-color: #4b2b11;
  border: 2px solid #4b2b11;

  &:hover {
    background-color: #80451d;
    border: 2px solid #4b2b11;
  }

  &:active {
    border: 2px solid #4b2b11;
    background-color: #683818;
    border-style: outset;
    ${activeButtonStyles}
  }
`;

// styles for primary button when disabled
const primaryBtnDisabledStyles = css`
  background-color: #4b2b11;
  border: 2px solid #4b2b11;
  opacity: 0.7;
  cursor: default;
`;

const getPrimaryBtnStyles = props =>
  props.isRegistrationEnabled ? primaryBtnEnabledStyles : primaryBtnDisabledStyles;

const primaryButtonStyles = css`
  margin: 4px auto;
  ${sharedBtnStyles}
  
  &.sign-in-sign-up-btn {
    border-radius: 1rem;
    width: 80%;
    ${primaryBtnEnabledStyles} // sign-in-sign-up primary buttons always enabled

    // button to take up full width on smaller-screen sizes
    @media screen and (max-width:768px){
      width: 100%;
    }
  }

  // lesson-times-overview primary button can be enabled or disabled
  &.lesson-times-overview-btn {
    ${getPrimaryBtnStyles}
  }
`;

const secondaryButtonStyles = css`
  background-color: black;
  border: 1px solid black;
  ${sharedBtnStyles}

  &:hover {
    background: white;
    color: black;
  }

  &:active {
    ${activeButtonStyles}
  }

  &.lesson-slideshow-btn{
    width: 80%;
    align-self: center;
    margin: 4px auto;
  }

  &.cart-dropdown-btn{
    width: 80%;
    margin: auto
  }

  &.lesson-card-btn{
    width: 50%;
    margin: .5rem auto;

    @media screen and (max-width:1024px){
        width: 80%;
    }
  }
`;

const googleSignInStyles = css`
  font-family: 'Roboto', sans-serif;
  background-color: #4285F4;
  border: 1px solid #4285F4;
  border-radius: 16px;
  margin: 4px auto;
    width: 80%;
  ${sharedBtnStyles}

  &:hover {
    background-color: #357ae8;
    border: 1px solid black;
  }

  &:active {
    ${activeButtonStyles}
  }

  // button to take up full width on smaller-screen sizes
  @media screen and (max-width:768px){
    width: 100%;
  }
`;

// styles for available days
const isAvailableStyles = css`
  background-color: lightblue;
  font-weight: bold;
  border: 1px solid #18414e;

  &:hover { 
    background-color: #76bdd5;
  }

  &:active { 
    background-color: #3ca1c3;
    border: 1px solid #0c2027;
  }
`;

// styles for unavailable days
const isUnavailableStyles = css`
  cursor: default;
  border: 1px solid grey;
`;

const getIsAvailableStyles = props =>
  props.isAvailable ? isAvailableStyles : isUnavailableStyles;

// selected day of week will always be highlighted and inactive
const isSelectedDayStyles = css`
  background-color: #3ca1c3 !important;
  cursor: default;
  pointer-events: none;
`;

const getIsSelectedDayStyles = props =>
  props.isSelectedDayOfWeek ? isSelectedDayStyles : '';

const daysMenuStyles = css`
  flex: 1;
  padding: .5rem 0;
  ${getIsAvailableStyles}
  ${getIsSelectedDayStyles}
`;

// type of CustomButton passed as param determines distinct styling
const getButtonStyles = props => {
  if (props.isGoogleSignIn) return googleSignInStyles;
  if (props.isPrimary) return primaryButtonStyles;
  if (props.isSecondary) return secondaryButtonStyles;
  return daysMenuStyles;
}

export const CustomButtonContainer = styled.button`
  outline: none;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${getButtonStyles}
`;
