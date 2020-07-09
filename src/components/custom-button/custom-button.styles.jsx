import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const googleSignInStyles = css`
  background-color: #4285F4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  return props.isGoogleSignIn ? googleSignInStyles : buttonStyles;
}

export const CustomButtonContainer = styled.div`
  box-sizing: border-box;
  text-align: center;
  padding: 10px 5px;
  box-sizing: border-box;
  width: 50%;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${getButtonStyles}
  
`;