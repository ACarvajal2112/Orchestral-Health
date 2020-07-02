import React from 'react';

import InstrumentPreview from '../instrument-preview/instrument-preview.component';

const FamilyPreview = ({ title, instruments }) => (
  <div className='catalog-preview'>
    <h1 className='title'>{title}</h1>
    {instruments.slice(0, 4).map(({ id, ...otherInstrumentProps }) => (
      <InstrumentPreview key={id} {...otherInstrumentProps} isInstrumentPreview />
    ))}
  </div>
);

export default FamilyPreview;