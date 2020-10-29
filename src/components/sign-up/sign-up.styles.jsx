import styled from 'styled-components';

export const SignUpContainer = styled.div`
  flex: 1;
  margin: 0 5px;
  padding: 1rem;
  background-color: #4b2b11;
  color: #fff;
  border-radius: 10px;
  -webkit-box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.8);
  -moz-box-shadow:    3px 3px 6px 0px rgba(0, 0, 0, 0.8);
  box-shadow:         3px 3px 6px 0px rgba(0, 0, 0, 0.8); 

  button {
    margin-left: auto;
    margin-right: auto;
    width: 80%;

    @media screen and (max-width:1024px){
      width: 100%;
    }
  }

  form {
    input, input:focus {
      color: #fff;
    }
  }

  @media screen and (max-width:480px){
    margin: 5px 0;
  }
`;
