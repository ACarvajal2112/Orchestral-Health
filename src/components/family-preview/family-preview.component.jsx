import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';

import { FamilyPreviewContainer } from './family-preview.styles';

import MenuItem from '../menu-item/menu-item.component';

const FamilyPreview = ({ title, instruments }) => {
  const match = useRouteMatch();
  const history = useHistory();

  const handleClick = name => {
    history.push(`${match.path}/${title}/${name}`)
  }

  return (
    <FamilyPreviewContainer id={title}>
    <h1 className='family-title'>{title}</h1>
    <div className='menu-items-preview'>
      {instruments.slice(0,4).map(({ id, name, ...otherInstrumentProps }) => (
        <MenuItem 
          key={name}
          onClick={() => handleClick(name)} 
          name={name}
          {...otherInstrumentProps} 
          isInstrumentPreview />
      ))}
    </div>
  </FamilyPreviewContainer>
  );
};

export default FamilyPreview;
