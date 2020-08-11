import styled, { css } from 'styled-components';

const footerNavStyles = css`
  position: fixed;
  bottom: -40px;
  left: 20%;
  transition: all 0.5s;
`;

const isScrolledAnimationStyles = css`
  transform: translateY(-50px);
`;

// if component is a footer, styles will position component off screen
const getFooterNavStyles = props => 
  props.isFooter ? footerNavStyles : '';

// if header nav is scrolled past, footer will translate onto screen
const getScrolledNavStyles = props => 
  props.isScrolled ? isScrolledAnimationStyles : '';


export const NavMenuContainer = styled.div`
  width: 60%;
  margin-left: auto; 
  margin-right: auto;
  display: flex;
  justify-content: space-evenly;
  background: white;

  ${getFooterNavStyles}
  ${getScrolledNavStyles}
`;

export const NavMenuOptionContainer = styled.div`
  flex: 1;
  display: flex;
  text-align: center;

  & a {
    flex: 1;
    justify-self: flex-start;
    text-decoration: none;
  }

  /* every link in nav besides last child will have icon after */
  &:not(:last-child)::after {
    font-family: 'Font Awesome 5 Pro';
    content: '\f8cf';
    flex: 1;
  }

  /* add empty content after last child to maintain spacing of flex-items */
  &:last-child::after {
    content: '';
    flex: 1;
  }
`;
