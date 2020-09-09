import React from 'react';
import { withRouter } from 'react-router-dom';

import { FamilyPreviewContainer } from './family-preview.styles';

import MenuItem from '../menu-item/menu-item.component';

const FamilyPreview = ({ title, instruments, match, history }) => (
  <FamilyPreviewContainer id={title}>
    <h1 className='family-title'>{title}</h1>
    <div className='menu-items-preview'>
      {instruments.slice(0,4).map(({ id, name, ...otherInstrumentProps }) => (
        <MenuItem 
          key={name}
          onClick={() => history.push(`${match.path}/${title}/${name}`)} 
          name={name}
          {...otherInstrumentProps} 
          isInstrumentPreview />
      ))}
    </div>
  </FamilyPreviewContainer>
);

export default withRouter(FamilyPreview);
