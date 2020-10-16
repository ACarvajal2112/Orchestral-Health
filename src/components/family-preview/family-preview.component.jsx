import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import MenuItem from '../menu-item/menu-item.component';
import PreviewHeader from '../../components/preview-header/preview-header.component';

import { 
  FamilyPreviewContainer, 
  MenuItemsPreviewContainer
} from './family-preview.styles';

const FamilyPreview = ({ title, instruments }) => {
  const match = useRouteMatch();
  const history = useHistory();

  const handleClick = () => {
    history.push(`${match.path}/${title}`)
  }

  return (
    <FamilyPreviewContainer id={title}>
    <PreviewHeader isClickable>
      <h1 onClick={handleClick}>{title}</h1>
    </PreviewHeader>
    <MenuItemsPreviewContainer>
      {instruments.slice(0,4).map(({ id, name, ...otherInstrumentProps }) => (
        <MenuItem 
          key={name}
          name={name}
          title={title}
          {...otherInstrumentProps} 
          isInstrumentPreview />
      ))}
    </MenuItemsPreviewContainer>
  </FamilyPreviewContainer>
  );
};

export default FamilyPreview;
