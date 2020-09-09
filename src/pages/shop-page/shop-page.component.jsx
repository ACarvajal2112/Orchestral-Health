import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

import CatalogOverviewContainer from '../../components/catalog-overview/catalog-overview.container';
import FamilyOverviewContainer from '../../components/family-overview/family-overview.container';
import ItemsOverviewContainer from '../../components/items-overview/items-overview.container';

import { fetchShopDataStartAsync } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchShopDataStartAsync } = this.props;
    fetchShopDataStartAsync();
  };
  
  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route 
          exact 
          path={`${match.path}`} 
          component={CatalogOverviewContainer}
        />
        <Route 
          exact 
          path={`${match.path}/:familyId`} 
          component={FamilyOverviewContainer} />
        <Route 
          path={`${match.path}/:familyId/:instrumentId`}
          component={ItemsOverviewContainer}
        />
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchShopDataStartAsync: () => dispatch(fetchShopDataStartAsync())
});

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
