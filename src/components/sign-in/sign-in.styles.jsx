import styled from 'styled-components';

export const SignInContainer = styled.div`
  flex: 1;
  margin: 0 5px;
  padding-bottom: 20px;
  align-self: flex-start;
  text-align: center;
  border-radius: 10px;
  -webkit-box-shadow: 0px 2px 5px 1px rgba(0,0,0,0.7); 
  -moz-box-shadow: 0px 2px 5px 1px rgba(0,0,0,0.7);
  box-shadow: 0px 2px 5px 1px rgba(0,0,0,0.7);

  @media screen and (max-width:480px){
    align-self: unset;
    margin: 5px 0;
  }
`;

export const SignInForm = styled.form`
  padding: 0 1rem;
`;
