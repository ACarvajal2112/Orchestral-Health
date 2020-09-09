import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

import CatalogOverviewContainer from '../../components/catalog-overview/catalog-overview.container';
import FamilyOverviewContainer from '../../components/family-overview/family-overview.container';
import ItemsOverviewContainer from '../../components/items-overview/items-overview.container';

import { fetchShopDataStart } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchShopDataStart } = this.props;
    fetchShopDataStart();
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
  fetchShopDataStart: () => dispatch(fetchShopDataStart())
});

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
