import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../with-spinner/with-spinner.component';
import FamilyOverview from '../family-overview/family-overview.component';

import { selectIsCatalogLoaded } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
  isCatalogLoaded: selectIsCatalogLoaded
});

const FamilyOverviewContainer = connect(mapStateToProps)(WithSpinner(FamilyOverview));

export default FamilyOverviewContainer;

