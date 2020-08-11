import React from 'react';
import { withRouter } from 'react-router-dom';

import { 
  MenuItemContainer, /* div */
  BackgroundImageContainer, /* div */
  ContentContainer, /* div */
  TitleContainer, /* span */
  SubtitleContainer
} from './menu-item.styles';

const MenuItem = ({ title, name, urlLink, imgUrl, history, match, ...otherProps }) => {
  const path = otherProps.isDirectoryItem ? `${match.path}shop/${title}` : `${match.path}/${name}`;
  return( 
    <MenuItemContainer 
      onClick={() => history.push(path)}
      {...otherProps}>
      <BackgroundImageContainer
        className='background-image'
        style={{backgroundImage: `url(${imgUrl})`}}
      />
      <ContentContainer className='content'>
        <TitleContainer>{title ? title : name}</TitleContainer>
        <SubtitleContainer>VIEW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  )
}

export default withRouter(MenuItem);
