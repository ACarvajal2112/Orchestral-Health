import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Item from '../item/item.component';

import { selectItemsForPreview } from '../../redux/shop/shop.selectors';

import './items-overview.styles.scss';

const ItemsOverview = ({ match, items }) => (
  <div className='items-overview'>
    {items.map(({ id, ...otherItemProps }) => (
      <Item key={id} {...otherItemProps} />
    ))}
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  items: selectItemsForPreview(ownProps.match.params.familyId, ownProps.match.params.instrumentId)(state)
});

export default withRouter(connect(mapStateToProps)(ItemsOverview));