import React from 'react';
import { connect } from 'react-redux';

import DirectoryItem from '../directory-item/directory-item.component';
import { selectFamily } from '../../redux/shop/shop.selectors';

import { FamilyPreviewContainer } from './family-overview.styles';

const FamilyOverview = ({ family }) => {
  console.log(family);
  const { title, instruments } = family;
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

const mapStateToProps = (state, ownProps) => ({
  family: selectFamily(ownProps.match.params.familyId)(state)
});

export default connect(mapStateToProps)(FamilyOverview);