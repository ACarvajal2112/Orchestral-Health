import styled, { css } from 'styled-components';

const headerNavStyles = css`
    @media screen and (max-width: 1024px){
    width: 100%;
  }
`;

const footerNavStyles = css`
  position: fixed;
  padding: 4px 0;
  border: 1px solid black;
  border-radius: 4px;
  bottom: -60px;
  left: 20%;
  transition: all 0.5s;

  @media screen and (max-width: 1024px){
    left: 3%;
    width: 94%;
  }
`;

const isScrolledAnimationStyles = css`
  transform: translateY(-60px);
`;

// if component is a footer, styles will position component off screen
const getNavStyles = props => 
  props.isFooter ? footerNavStyles : headerNavStyles;

// if header nav is scrolled past, footer will translate onto screen
const getScrolledNavStyles = props => 
  props.isScrolled ? isScrolledAnimationStyles : '';


export const NavMenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 60%;
  margin: 1rem auto;
  background: white;

  & div:last-child span {
    display: none;
  }

  ${getNavStyles}
  ${getScrolledNavStyles}
`;

export const NavMenuOptionContainer = styled.div`
  display: flex;
  flex: 2;
  text-align: center;
  padding: 0 4px;

  // last menu option does not have adjacent icon so it is smaller
  &:last-of-type{
    flex: 1;
    // icons removed at small screen sizes, make all menu options the same size
    @media screen and (max-width: 480px){
      flex: 2;
    }
  }

  // all menu options except last replace icon with right border
  @media screen and (max-width: 481px){
    &:not(:last-of-type) {
      border-right: 1px solid black;
    }
  }
`;

export const TitleOrNameContainer = styled.a`
  flex: 1;
  text-decoration: none;

  &:hover {
    color: #80451d;
  }

  &:active {
    color: #4b2b11;
  }
`;

export const IconContainer = styled.span`
  flex: 1;

  // remove icon at small screens
  @media screen and (max-width: 481px){
    display: none;
  }
`;
