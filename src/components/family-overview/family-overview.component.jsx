import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';
import NavMenu from '../nav-menu/nav-menu.component';

import { selectFamily } from '../../redux/shop/shop.selectors';

import { FamilyOverviewContainer } from './family-overview.styles';

const FamilyOverview = ({ family }) => {
  const { title, instruments } = family;
  return (
    <FamilyOverviewContainer>
      <NavMenu navItems={instruments} />
      <h1>{title.toUpperCase()}</h1>
      {instruments.map(({ id, ...otherInstrumentsProps }) => (
        <MenuItem 
          key={id} 
          id={otherInstrumentsProps.name} 
          {...otherInstrumentsProps} 
          isFamilyOverviewItem />
      ))}
      <NavMenu navItems={instruments} isFooter />
    </FamilyOverviewContainer>
  )
};

const mapStateToProps = (state, ownProps) => ({
  family: selectFamily(ownProps.match.params.familyId)(state)
});

export default connect(mapStateToProps)(FamilyOverview);
