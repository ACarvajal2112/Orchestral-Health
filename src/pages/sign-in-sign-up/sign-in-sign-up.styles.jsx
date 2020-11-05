import styled from 'styled-components';

export const SignInSignUpContainer = styled.div`
  width: 80%;
  margin: 30px auto 0 auto;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 1024px){
    width: 100%;
  }

  @media screen and (max-width:480px){
    flex-direction: column;
    margin-top: 0;
  }
`;
