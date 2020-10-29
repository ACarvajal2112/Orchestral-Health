import React, { useState, useEffect } from 'react';

import { 
  NavMenuContainer, 
  NavMenuOptionContainer,
  TitleOrNameContainer,
  IconContainer
} from './nav-menu.styles';

const NavMenu = ({ isFooter, navItems, ...otherProps }) => {

  const [scrolled, setScrolled] = useState(false);
  
  // if nav menu is a footer, add scroll event listener
  useEffect(() => {
    if (isFooter) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (isFooter) {
        window.removeEventListener('scroll', handleScroll);
      }
    }
  }, [isFooter]);

  // if user scrolls past header nav, set scrolled to true.
  const handleScroll = () => {
    const scrollTop = window.scrollY < 112;
    if (!scrollTop) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  };

  return (
    <NavMenuContainer isScrolled={scrolled} {...otherProps} isFooter={isFooter}>
      {navItems.map(({ title, name }) => {
        const titleOrName = title ? title : name;
        return <NavMenuOptionContainer key={titleOrName} >
          <TitleOrNameContainer href={`#${titleOrName}`}>
            {titleOrName}
          </TitleOrNameContainer>
          <IconContainer>
            <i className='far fa-music-alt'></i>
          </IconContainer>
        </NavMenuOptionContainer>
      })}
    </NavMenuContainer>
  )
};

export default NavMenu;
