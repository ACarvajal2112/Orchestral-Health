import DirectoryActionTypes from './directory.types';
import { firestore, convertDirectorySnapshotToMap } from '../../firebase/firebase.utils';

export const fetchDirectoryDataStart = () => ({
  type: DirectoryActionTypes.FETCH_DIRECTORY_DATA_START
});

export const fetchDirectoryDataSuccess = directoryDataMap => ({
  type: DirectoryActionTypes.FETCH_DIRECTORY_DATA_SUCCESS,
  payload: directoryDataMap
});

export const fetchDirectoryDataFailure = errorMessage => ({
  type: DirectoryActionTypes.FETCH_DIRECTORY_DATA_FAILURE,
  payload: errorMessage
});

export const fetchDirectoryDataStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('directory');
    dispatch(fetchDirectoryDataStart());

    collectionRef
      .get()
      .then(snapshot => {
        const directoryMap = convertDirectorySnapshotToMap(snapshot);
        dispatch(fetchDirectoryDataSuccess(directoryMap));
      })
      .catch(error => dispatch(fetchDirectoryDataFailure(error)));
  }
}
