import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CatalogOverview from '../../components/catalog-overview/catalog-overview.component';

import { selectIsCatalogLoaded } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
  isCatalogLoaded: selectIsCatalogLoaded
});

const CatalogOverviewContainer = connect(mapStateToProps)(WithSpinner(CatalogOverview));

export default CatalogOverviewContainer;
