import styled, { css } from 'styled-components';

const footerNavStyles = css`
  position: fixed;
  bottom: -40px;
  left: 20%;
  transition: all 0.5s;
`;

const isScrolledNavAnimationStyles = css`
  transform: translateY(-50px);
`;


const getFooterNavStyles = props => {
  console.log('props.isFooter ? ', props.isFooter);
  return props.isFooter ? footerNavStyles : '';
};

const getScrolledNavStyles = props => {
  console.log('props.isScrolled', props.isScrolled);
  return props.isScrolled ? isScrolledNavAnimationStyles : '';
};


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

export const NavMenuOption = styled.div`
  flex: 1;
  display: flex;
  text-align: center;

  & a {
    flex: 1;
    justify-self: flex-start;
    text-decoration: none;
  }

  // every option in nav besides last child will have icon after
  &:not(:last-child)::after {
    font-family: 'Font Awesome 5 Pro';
    content: '\f8cf';
    flex: 1;
  }

  // add empty content after last child to maintain spacing of flex-items 
  &:last-child::after {
    content: '';
    flex: 1;
  }
`;
