import React from 'react';
import { withRouter } from 'react-router-dom';

import './directory-item.styles.scss';

const DirectoryItem = ({ title, urlLink, imgUrl, history, match }) => (
  <div 
    className='directory-item'
    onClick={() => history.push(`${match.url}${urlLink}`)}>
    <div
      className='background-image'
      style={{backgroundImage: `url(${imgUrl})`}}
    />
    <div className='content'>
      <span className='title'>{title}</span>
      <span className='subtitle'>VIEW</span>
    </div>
  </div>
);

export default withRouter(DirectoryItem);