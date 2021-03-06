import DirectoryActionTypes from './directory.types';

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
