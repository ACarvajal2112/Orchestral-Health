import styled, { css } from 'styled-components';

const isClickableStyles = css`
  cursor: pointer;
`;

const getIsClickableStyles = props => 
  props.isClickable ? isClickableStyles : '';

export const PreviewHeaderContainer = styled.div`
  width: 100%;
  background-color: #4b2b11;
  margin: .5rem 0;

  h1 {
    position: relative;
    margin: 0;
    padding: 0 .5rem;
    left: 4rem;
    display: inline-block;
    text-transform: uppercase;
    background: white;
    ${getIsClickableStyles}

    // centre preview header content on small-to-medium screen sizes
    @media screen and (max-width:1024px){
      left: 50%;
      transform: translateX(-50%);
    }
    
    @media screen and (max-width:480px){
      font-size: 1.8em;
    }
  }
`;
