import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCatalog = createSelector(
  selectShop,
  shop => shop.catalog
);

export const selectFamily = (familyUrlParam) => 
  createSelector(
    selectCatalog,
    catalog => catalog[familyUrlParam]
  );

// convert catalog data into array for preview
export const selectCatalogForPreview = createSelector(
  selectCatalog,
  catalog => catalog ? Object.keys(catalog).map(key => catalog[key]) : []
);