import React from 'react';
import { withRouter, Route } from 'react-router-dom';

import CatalogOverview from '../../components/catalog-overview/catalog-overview.component';
import FamilyOverview from '../../components/family-overview/family-overview.component';
import ItemsOverview from '../../components/items-overview/items-overview.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CatalogOverview} />
    <Route exact path={`${match.path}/:familyId`} component={FamilyOverview} />
    <Route path={`${match.path}/:familyId/:instrumentId`} component={ItemsOverview} />
  </div>
);

export default withRouter(ShopPage);