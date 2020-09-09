import ShopActionTypes from './shop.types';

export const fetchShopDataStart = () => ({
  type: ShopActionTypes.FETCH_SHOP_DATA_START
});

export const fetchShopDataSuccess = shopDataMap => ({
  type: ShopActionTypes.FETCH_SHOP_DATA_SUCCESS,
  payload: shopDataMap
});

export const fetchShopDataFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_SHOP_DATA_FAILURE,
  payload: errorMessage
});
