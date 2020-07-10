import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';
import { selectFamily } from '../../redux/shop/shop.selectors';

import { FamilyOverviewContainer } from './family-overview.styles';

const FamilyOverview = ({ family }) => {
  const { title, instruments } = family;
  return (
    <FamilyOverviewContainer>
      <h1 className='title'>{title.toUpperCase()}</h1>
      {instruments.map(({ id, ...otherInstrumentsProps }) => (
        <MenuItem key={id} {...otherInstrumentsProps} isFamilyOverviewItem />
      ))}
    </FamilyOverviewContainer>
  )
};

const mapStateToProps = (state, ownProps) => ({
  family: selectFamily(ownProps.match.params.familyId)(state)
});

export default connect(mapStateToProps)(FamilyOverview);