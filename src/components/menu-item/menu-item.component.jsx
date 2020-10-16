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

  /*
   * Function returns url based on MenuItem props.
   */
  const getUrlFromProps = () => {
    if (otherProps.isDirectoryItem) return `/shop/${title}`;
    if (otherProps.isInstrumentPreview) return `${match.path}/${title}/${name}`;
    return `/shop/${match.params.familyId}/${name}`;
  }

  const handleClick = () => {
    history.push(getUrlFromProps());
  };

  return (
    <MenuItemContainer onClick={() => handleClick()} {...otherProps}>
      <BackgroundImageContainer
        className='background-image'
        style={{ backgroundImage: `url(${encodeURI(imgUrl)})` }}
      />
      <ContentContainer>
        <TitleContainer>{name ? name : title}</TitleContainer>
        <SubtitleContainer>VIEW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
