import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../with-spinner/with-spinner.component';
import ItemsOverview from '../items-overview/items-overview.component';

import { selectIsCatalogLoaded } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCatalogLoaded(state)
});

const ItemsOverviewContainer = connect(mapStateToProps)(WithSpinner(ItemsOverview));

export default ItemsOverviewContainer;
