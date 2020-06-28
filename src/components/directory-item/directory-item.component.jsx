import React from 'react';
import { withRouter } from 'react-router-dom';

import { DirectoryItemContainer } from './directory-item.styles';

const DirectoryItem = ({ title, name, urlLink, imgUrl, history, match, ...otherProps }) => (
  <DirectoryItemContainer 
    onClick={() => history.push(`${match.url}${urlLink}`)}
    {...otherProps}>
    <div
      className='background-image'
      style={{backgroundImage: `url(${imgUrl})`}}
    />
    <div className='content'>
      <span className='title'>{title ? title : name}</span>
      <span className='subtitle'>VIEW</span>
    </div>
  </DirectoryItemContainer>
);

export default withRouter(DirectoryItem);