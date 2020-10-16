import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import Item from '../item/item.component';
import PreviewHeader from '../preview-header/preview-header.component';

import { selectItemsForPreview } from '../../redux/shop/shop.selectors';

import { ItemsPreviewContainer } from './items-overview.styles';

const ItemsOverview = ({ items }) => {
  const match = useRouteMatch();
  const title = match.params.instrumentId;
  return (
    <div>
      <PreviewHeader>
        <h1>{title}</h1>
      </PreviewHeader>
      <ItemsPreviewContainer>
        {items.map(item => (
          <Item key={item.name} item={item} title={title}/>
        ))}
      </ItemsPreviewContainer>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  items: selectItemsForPreview(
    ownProps.match.params.familyId, 
    ownProps.match.params.instrumentId
  )(state)
});

export default connect(mapStateToProps)(ItemsOverview);
