import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter, Route } from 'react-router-dom';

import CatalogOverview from '../../components/catalog-overview/catalog-overview.component';
import FamilyOverview from '../../components/family-overview/family-overview.component';
import ItemsOverview from '../../components/items-overview/items-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchShopDataStartAsync } from '../../redux/shop/shop.actions';
import { selectIsShopDataFetching, selectIsCatalogLoaded } from '../../redux/shop/shop.selectors';

const CatalogOverviewWithSpinner = WithSpinner(CatalogOverview);
const FamilyOverviewWithSpinner = WithSpinner(FamilyOverview);
const ItemsOverviewWithSpinner = WithSpinner(ItemsOverview);

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchShopDataStartAsync } = this.props;
    fetchShopDataStartAsync();
  };
  
  render() {
    const { match, isCatalogLoaded } = this.props;
    return (
      <div className='shop-page'>
        <Route 
          exact 
          path={`${match.path}`} 
          render={(props) =>  
            <CatalogOverviewWithSpinner isLoading={!isCatalogLoaded} {...props} />
          } />
        <Route 
          exact 
          path={`${match.path}/:familyId`} 
          render={(props) => (
            <FamilyOverviewWithSpinner isLoading={!isCatalogLoaded} {...props} />
          )} />
        <Route 
          path={`${match.path}/:familyId/:instrumentId`}
          render={(props) => (
            <ItemsOverviewWithSpinner isLoading={!isCatalogLoaded} {...props} />
          )} />
    </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isShopDataFetching: selectIsShopDataFetching,
  isCatalogLoaded: selectIsCatalogLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchShopDataStartAsync: () => dispatch(fetchShopDataStartAsync())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ShopPage)
);
