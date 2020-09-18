import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
} from './menu-item.styles';

const MenuItem = ({ title, name, urlLink, imgUrl, ...otherProps }) => {
  const history = useHistory();
  const match = useRouteMatch();
  // directory items have title property, route to /shop/:itemName
  // non-directory items have name property, append name to current route
  const path = otherProps.isDirectoryItem
    ? `${match.path}shop/${title.toLowerCase()}`
    : `${match.path}/${name.toLowerCase()}`;

  const handleClick = () => {
    history.push(path);
  };

  return (
    <MenuItemContainer onClick={() => handleClick()} {...otherProps}>
      <BackgroundImageContainer
        className='background-image'
        style={{ backgroundImage: `url(${encodeURI(imgUrl)})` }}
      />
      <ContentContainer>
        <TitleContainer>{title ? title : name}</TitleContainer>
        <SubtitleContainer>VIEW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
