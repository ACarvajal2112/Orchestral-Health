import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FamilyPreview from '../family-preview/family-preview.component';
import NavMenu from '../nav-menu/nav-menu.component';

import { selectCatalogForPreview } from '../../redux/shop/shop.selectors';

import { CatalogOverviewContainer } from './catalog-overview.styles';

const CatalogOverview = ({ catalog }) => (
  <CatalogOverviewContainer>
    <NavMenu navItems={catalog} />
    {catalog.map(({ id, ...otherFamilyProps }) => (
      <FamilyPreview key={id} {...otherFamilyProps}/>
    ))}
    <NavMenu navItems={catalog} isFooter />
  </CatalogOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  catalog: selectCatalogForPreview
});

export default connect(mapStateToProps)(CatalogOverview);
