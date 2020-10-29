import styled, { css } from 'styled-components';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 1.5rem;

  &:hover {
    cursor: pointer;
  }

  // shrink cart icon for small screen sizes
  @media screen and (max-width:480px){
    i {
      font-size: 2em;
    }
  }
  
  @media screen and (max-width:1024px){
    margin-left: 0;
  }
`;

const doubleDigitStyles = css`
  left: 40%;
`;

const singleDigitStyles = css`
  left: 48%;
`;

// if item count is double digits, IncrementerContainer shifts to the left
const getIncrementerStyles = props =>
  props.itemCount > 9 ? doubleDigitStyles : singleDigitStyles;

export const IncrementerContainer = styled.span`
  position: absolute;
  font-weight: bold;
  top: 4px;
  ${getIncrementerStyles}

  // re-adjust item counter in cart icon for small screen sizes 
  @media screen and (max-width:480px){
    top: 7px;
  }
`;
