import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../with-spinner/with-spinner.component';
import FamilyOverview from '../family-overview/family-overview.component';

import { selectIsCatalogLoaded } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCatalogLoaded(state)
});

const FamilyOverviewContainer = connect(mapStateToProps)(WithSpinner(FamilyOverview));

export default FamilyOverviewContainer;
