import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, useRouteMatch } from 'react-router-dom';

import CatalogOverviewContainer from '../../components/catalog-overview/catalog-overview.container';
import FamilyOverviewContainer from '../../components/family-overview/family-overview.container';
import ItemsOverviewContainer from '../../components/items-overview/items-overview.container';

import { fetchShopDataStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchShopDataStart }) => {

  useEffect(() => {
    fetchShopDataStart();
  }, [fetchShopDataStart]); 

  const match = useRouteMatch();
  const { path } = match;
  
  return (
    <div className='shop-page'>
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
  </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchShopDataStart: () => dispatch(fetchShopDataStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
