import styled, { css } from 'styled-components';

const footerNavStyles = css`
  position: fixed;
  padding: 4px 0;
  border: 1px solid black;
  border-radius: 4px;
  bottom: -60px;
  left: 25%;
  transition: all 0.5s;
`;

const isScrolledAnimationStyles = css`
  transform: translateY(-60px);
`;

// if component is a footer, styles will position component off screen
const getFooterNavStyles = props => 
  props.isFooter ? footerNavStyles : '';

// if header nav is scrolled past, footer will translate onto screen
const getScrolledNavStyles = props => 
  props.isScrolled ? isScrolledAnimationStyles : '';


export const NavMenuContainer = styled.div`
  width: 50%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-evenly;
  background: white;

  ${getFooterNavStyles}
  ${getScrolledNavStyles}
`;

export const NavMenuOptionContainer = styled.div`
  flex: 2;
  display: flex;
  text-align: center;

  & a {
    flex: 1;
    text-decoration: none;
  }

  /* every link in nav besides last child will have icon after */
  &:not(:last-child)::after {
    font-family: 'Font Awesome 5 Pro';
    content: '\f8cf';
    flex: 1;
  }

  &:last-child {
    flex: 1;

    & a { text-align: left; }
  }

  &:first-child a { text-align: right; }
`;
