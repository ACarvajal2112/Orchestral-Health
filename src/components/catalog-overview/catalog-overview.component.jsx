import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FamilyPreview from '../family-preview/family-preview.component';
import { selectCatalogForPreview } from '../../redux/shop/shop.selectors';

import './catalog-overview.styles.scss';

const CatalogOverview = ({ catalog }) => (
  <div className='catalog-overview'>
    <div className='title-nav'>
      {catalog.map(({ id, title }) => (
        <div key={id} className='title-nav-option'>
          <a href={`#${title}`}>{title}</a>
        </div>
      ))}
    </div>
    {catalog.map(({ id, ...otherFamilyProps }) => (
      <FamilyPreview key={id} {...otherFamilyProps}/>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  catalog: selectCatalogForPreview
});

export default connect(mapStateToProps)(CatalogOverview);