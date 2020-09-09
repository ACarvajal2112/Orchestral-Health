import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Item from '../item/item.component';

import { selectItemsForPreview } from '../../redux/shop/shop.selectors';

import { ItemsOverviewContainer } from './items-overview.styles';

const ItemsOverview = ({ items }) => (
  <ItemsOverviewContainer>
    {items.map(item => (
      <Item key={item.name} item={item} />
    ))}
  </ItemsOverviewContainer>
);

const mapStateToProps = (state, ownProps) => ({
  items: selectItemsForPreview(
    ownProps.match.params.familyId, 
    ownProps.match.params.instrumentId
  )(state)
});

export default withRouter(connect(mapStateToProps)(ItemsOverview));
