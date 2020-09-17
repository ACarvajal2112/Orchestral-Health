import React, { useState, useEffect } from 'react';

import { 
  NavMenuContainer, 
  NavMenuOptionContainer 
} from './nav-menu.styles';

const NavMenu = ({ isFooter, navItems, ...otherProps }) => {

  const [scrolled, setScrolled] = useState({ isScrolled: false });
  
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
  }, []);

  // if user scrolls past header nav, set scrolled to true.
  const handleScroll = () => {
    const scrollTop = window.scrollY < 112;
    if (!scrollTop) {
      setScrolled({ isScrolled: true });
    }
    else {
      setScrolled({ isScrolled: false });
    }
  };

  const { isScrolled } = scrolled;
  return (
    <NavMenuContainer isScrolled={isScrolled} {...otherProps} isFooter={isFooter}>
      {navItems.map(({ title, name }) => (
        <NavMenuOptionContainer key={title ? title : name} >
          <a href={`#${title ? title : name}`}>{title ? title : name}</a>
        </NavMenuOptionContainer>
      ))}
    </NavMenuContainer>
  )
};

export default NavMenu;
