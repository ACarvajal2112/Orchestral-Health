import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

import CatalogOverview from '../../components/catalog-overview/catalog-overview.component';
import FamilyOverview from '../../components/family-overview/family-overview.component';
import ItemsOverview from '../../components/items-overview/items-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore, convertShopSnapshotToMap } from '../../firebase/firebase.utils';

import { updateShopData } from '../../redux/shop/shop.actions';

const CatalogOverviewWithSpinner = WithSpinner(CatalogOverview);
const FamilyOverviewWithSpinner = WithSpinner(FamilyOverview);
const ItemsOverviewWithSpinner = WithSpinner(ItemsOverview);

class ShopPage extends React.Component {

  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateShopData } = this.props;
    const collectionRef = firestore.collection('shop');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const shopMap = convertShopSnapshotToMap(snapshot);
      updateShopData(shopMap);
      setTimeout(() => {
        this.setState({ loading: false })
      }, 1000);
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }
  
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route 
          exact 
          path={`${match.path}`} 
          render={(props) => 
            <CatalogOverviewWithSpinner isLoading={loading} {...props} />
          } />
        <Route 
          exact 
          path={`${match.path}/:familyId`} 
          render={(props) => (
            <FamilyOverviewWithSpinner isLoading={loading} {...props} />
          )} />
        <Route 
          path={`${match.path}/:familyId/:instrumentId`}
          render={(props) => (
            <ItemsOverviewWithSpinner isLoading={loading} {...props} />
          )} />
    </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateShopData: shopData => 
    dispatch(updateShopData(shopData))
});

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
