import React from 'react';

import DirectoryItem from '../directory-item/directory-item.component';
import withData from '../../with-data';

import { FamilyPreviewContainer } from './family-overview.styles';

const FamilyOverview = ({ data }) => {
  const { title, instruments } = data;
  return (
    <FamilyPreviewContainer>
      <h1 className='title'>{title}</h1>
      <div className='family-preview-grid'>
        {instruments.map(({ id, ...otherInstrumentsProps }) => (
          <DirectoryItem key={id} {...otherInstrumentsProps} isFamilyOverviewItem />
        ))}
      </div>
    </FamilyPreviewContainer>
  ) 
};

// const mapStateToProps = (state, ownProps) => ({
//   family: selectFamily(ownProps.match.params.familyId)(state)
// });

export default withData(FamilyOverview, 'isFamilyOverview');