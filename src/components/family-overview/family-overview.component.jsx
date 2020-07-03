import React from 'react';
import { connect } from 'react-redux';

import DirectoryItem from '../directory-item/directory-item.component';
import MenuItem from '../menu-item/menu-item.component';
import { selectFamily } from '../../redux/shop/shop.selectors';

const FamilyOverview = ({ family }) => {
  const { title, instruments } = family;
  return (
    <div className='family-overview'>
      <h1 className='title'>{title}</h1>
      <div className='family-preview-grid'>
        {instruments.map(({ id, ...otherInstrumentsProps }) => (
          <MenuItem key={id} {...otherInstrumentsProps} isFamilyOverviewItem />
        ))}
      </div>
    </div>
  ) 
};

const mapStateToProps = (state, ownProps) => ({
  family: selectFamily(ownProps.match.params.familyId)(state)
});

export default connect(mapStateToProps)(FamilyOverview);