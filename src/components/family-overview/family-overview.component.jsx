import React from 'react';
import { connect } from 'react-redux';

import MenuItem from '../menu-item/menu-item.component';
import NavMenu from '../nav-menu/nav-menu.component';
import PreviewHeader from '../preview-header/preview-header.component';

import { selectFamily } from '../../redux/shop/shop.selectors';

import { FamilyOverviewContainer } from './family-overview.styles';

const FamilyOverview = ({ family }) => {
  const { title, instruments } = family;
  return (
    <FamilyOverviewContainer>
      <NavMenu navItems={instruments} />
      <PreviewHeader>
        <h1>{title}</h1>
      </PreviewHeader>
      {instruments.map(({ name, ...otherInstrumentProps }) => (
        <MenuItem 
          key={name} 
          id={name}
          title={title}
          name={name}
          {...otherInstrumentProps}
          isFamilyOverviewItem 
        />
      ))}
      <NavMenu navItems={instruments} isFooter />
    </FamilyOverviewContainer>
  )
};

const mapStateToProps = (state, ownProps) => ({
  family: selectFamily(ownProps.match.params.familyId)(state)
});

export default connect(mapStateToProps)(FamilyOverview);
