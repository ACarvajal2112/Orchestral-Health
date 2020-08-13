import ShopActionTypes from './shop.types';

import { firestore, convertShopSnapshotToMap } from '../../firebase/firebase.utils';

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

export const fetchShopDataStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('shop');
    dispatch(fetchShopDataStart());

    collectionRef
      .get()
      .then(snapshot => {
        const shopMap = convertShopSnapshotToMap(snapshot);
        setTimeout(() => {
          dispatch(fetchShopDataSuccess(shopMap));
        }, 300);
      })
      .catch(error => dispatch(fetchShopDataFailure(error)));
  };
};
