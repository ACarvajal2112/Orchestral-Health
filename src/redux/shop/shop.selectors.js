import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCatalog = createSelector(
  [selectShop],
  shop => shop.catalog
);

export const selectFamily = familyUrlParam => 
  createSelector(
    [selectCatalog],
    catalog => catalog[familyUrlParam]
  );

// convert catalog data into array for preview
export const selectCatalogForPreview = createSelector(
  [selectCatalog],
  catalog => catalog ? Object.keys(catalog).map(key => catalog[key]) : []
);

// select instruments based on family url param
export const selectInstruments = (familyUrlParam) =>
  createSelector(
    [selectFamily(familyUrlParam)],
    family => family ? family.instruments : null
  );

// select items based on family and instrument url params
export const selectItems = (familyUrlParam, instrumentId) =>
  createSelector(
    [selectInstruments(familyUrlParam)],
    instruments => 
      instruments
      ? instruments.find(instrument => instrument.name === instrumentId).items
      : null
);

export const selectItemsForPreview = (familyUrlParam, instrumentId) =>
  createSelector(
    [selectItems(familyUrlParam, instrumentId)],
    items => items ? Object.keys(items).map(key => items[key]) : []
  );