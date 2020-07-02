import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <div className='logo-container'>
      <Link to='/'>
        <img 
          src={require('../../assets/drum-logo.png')} 
          alt='drum logo' 
        />
      </Link>
    </div>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/lessons'>
        LESSONS
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      <Link className='option' to='/signin'>
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;