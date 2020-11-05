import styled, { css } from 'styled-components';

const translateElemStyles = css`
  top: -14px;
  font-size: 14px;
  color: #000;
`;

export const FormInputGroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  @media screen and (max-width:480px){
    margin: 25px 0;
  }
`;

export const FormInputContainer = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #1f1f1f;
  font-size: 18px;
  width: 100%;
  padding: 10px 10px 10px 5px;
  display: block;

  &:focus {
    outline: none;
  }

  // when focus is on inputs, select form-input-label SIBLING of form-input
  &:focus ~ label {
    ${translateElemStyles}
  }
`;

export const FormInputLabel = styled.label`
  font-size: 16px;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  color: lightgray;
  transition: 300ms ease all;
  // when inputs have values with non-zero length, select form-input-label
  &.shrink {
    ${translateElemStyles}
  }    
`;