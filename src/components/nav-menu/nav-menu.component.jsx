import React from 'react';

import './nav-menu.styles.scss';

const NavMenu = ({ navItems }) => (
  <div className='nav-menu'>
    {navItems.map(navItem => {
      const { id, title, name} = navItem;
      return ( 
        <div key={id} className='nav-menu-option'>
          <a href={`#${title ? title : name}`}>{title ? title : name}</a>
        </div>
      )
    })}
  </div>
);

export default NavMenu;