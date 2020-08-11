import styled, { css } from 'styled-components';

const translateElemStyles = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;

export const FormInputGroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  border: none;
  border-bottom: 1px solid grey;
  font-size: 18px;
  width: 100%;
  padding: 10px 10px 10px 5px;
  margin: 25px 0;
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