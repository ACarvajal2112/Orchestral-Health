import styled from 'styled-components';

export const SignInContainer = styled.div`
  flex: 1;
  margin: 0 5px;
  padding: 1rem;
  background-color: #4b2b11;
  color: #fff;
  align-self: flex-start;
  border-radius: 10px;
  -webkit-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.8);
  -moz-box-shadow:    3px 3px 6px 0px rgba(0, 0, 0, 0.8);
  box-shadow:         3px 3px 6px 0px rgba(0, 0, 0, 0.8); 

  form {
    input, input:focus {
      color: #fff;
    }
  }

  @media screen and (max-width:480px){
    align-self: unset;
    margin: 5px 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media screen and (max-width:480px){
    button {
      padding: 8px 0;
    }
  }

  @media screen and (min-width: 1024px){
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
`;