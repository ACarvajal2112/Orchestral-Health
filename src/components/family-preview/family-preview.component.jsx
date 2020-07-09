import React from 'react';

import { FamilyPreviewContainer } from './family-preview.styles';

import MenuItem from '../menu-item/menu-item.component';

const FamilyPreview = ({ title, instruments }) => (
  <FamilyPreviewContainer>
    <h1 className='family-title'>{title}</h1>
    <div className='menu-items-preview'>
      {instruments.slice(0, 4).map(({ id, ...otherInstrumentProps }) => (
        <MenuItem key={id} {...otherInstrumentProps} isInstrumentPreview />
      ))}
    </div>
  </FamilyPreviewContainer>
);

export default FamilyPreview;