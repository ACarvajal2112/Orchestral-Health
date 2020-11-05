import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width:480px){
    height: 60px;
  }
`;

export const LogoContainer = styled.div`
  height: 80%;
  width: 32rem;
  margin: auto 0 auto 1rem;

  svg {
    height: 100%;
    width: 100%;

    // hide large SVG logo on small-to-medium screen sizes
    &:first-of-type {
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }

    // show small SVG logo on small-to-medium screen sizes
    &:last-of-type {
      display: none;

      @media screen and (max-width: 1024px) {
        display: block;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    width: 20%;
    height: 100%;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 3rem;
  text-align: center;

  // spread out links and cart icon container on small-to-medium screen sizes
  @media screen and (max-width: 1024px) {
    width: 80%;
    margin-right: 0;
    justify-content: space-evenly;
  }
`;

export const OptionLink = styled(Link)`
  padding: 0 20px;
  cursor: pointer;  
  text-decoration: none;
  color: #80451d;
  font-size: 1rem;

  &:hover {
    color: #4b2b11;
  }

  &:active {
    color: #cbae2d;
  }

  @media screen and (max-width:1024px){
    padding: unset;
  }

  @media screen and (max-width:480px){
    font-size: .75em;
  }
`;
