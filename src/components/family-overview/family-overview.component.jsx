import React from 'react';
import { connect } from 'react-redux';

import DirectoryItem from '../directory-item/directory-item.component';
import { selectFamily } from '../../redux/shop/shop.selectors';

const FamilyOverview = ({ family }) => {
  console.log(family);
  const { title, instruments } = family;
  return (
    <div className='family-preview'>
      <h1>{title}</h1>
      {instruments.map(({ id, ...otherInstrumentsProps }) => (
        <DirectoryItem key={id} {...otherInstrumentsProps} />
      ))}
    </div>
  ) 
};

const mapStateToProps = (state, ownProps) => ({
  family: selectFamily(ownProps.match.params.familyId)(state)
});

export default connect(mapStateToProps)(FamilyOverview);