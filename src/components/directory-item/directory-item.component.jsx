import React from 'react';
import { withRouter } from 'react-router-dom';

import { MenuItemContainer } from './directory-item.styles';

const DirectoryItem = ({ title, name, urlLink, imgUrl, history, match, ...otherProps }) => (
  <MenuItemContainer 
    onClick={() => history.push(`${match.url}shop/${urlLink}`)}
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
);

export default withRouter(DirectoryItem);