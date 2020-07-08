import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer } from './menu-item.styles';

const MenuItem = ({ title, name, urlLink, imgUrl, history, match, ...otherProps }) => {
  const path = otherProps.isDirectoryItem ? `${match.path}shop/${title}` : `${match.path}/${name}`;
  return(
    <MenuItemContainer 
      onClick={() => history.push(path)}
      {...otherProps}>
      <div
       className='background-image'
        style={{backgroundImage: `url(${imgUrl})`}}
      />
      <div className='content'>
        <span className='title'>{title ? title : name}</span>
        <span className='subtitle'>VIEW</span>
      </div>
    </MenuItemContainer>
  )
}

export default withRouter(MenuItem);