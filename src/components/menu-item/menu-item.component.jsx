import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
} from "./menu-item.styles";

const MenuItem = ({ title, name, urlLink, imgUrl, ...otherProps }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const path = otherProps.isDirectoryItem
    ? `${match.path}shop/${title}`
    : `${match.path}/${name}`;

  const handleClick = () => {
    history.push(path);
  };

  return (
    <MenuItemContainer onClick={() => handleClick()} {...otherProps}>
      <BackgroundImageContainer
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <ContentContainer className="content">
        <TitleContainer>{title ? title : name}</TitleContainer>
        <SubtitleContainer>VIEW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
