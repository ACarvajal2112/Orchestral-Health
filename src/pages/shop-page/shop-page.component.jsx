import React, { useEffect, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, useRouteMatch } from 'react-router-dom';

import Spinner from '../../components/spinner/spinner.component';

import { fetchShopDataStart } from '../../redux/shop/shop.actions';

const CatalogOverviewContainer = lazy(() => import('../../components/catalog-overview/catalog-overview.container'));
const FamilyOverviewContainer = lazy(() => import ('../../components/family-overview/family-overview.container'));
const ItemsOverviewContainer = lazy(() => import('../../components/items-overview/items-overview.container'));

const ShopPage = ({ fetchShopDataStart }) => {

  useEffect(() => {
    fetchShopDataStart();
  }, [fetchShopDataStart]); 

  const match = useRouteMatch();
  const { path } = match;
  
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Route 
          exact 
          path={`${path}`} 
          component={CatalogOverviewContainer}
        />
        <Route 
          exact 
          path={`${path}/:familyId`} 
          component={FamilyOverviewContainer} />
        <Route 
          path={`${path}/:familyId/:instrumentId`}
          component={ItemsOverviewContainer}
        />
      </Suspense>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchShopDataStart: () => dispatch(fetchShopDataStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
