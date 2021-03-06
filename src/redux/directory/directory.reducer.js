import DirectoryActionTypes from './directory.types'

const INITIAL_STATE = ({
  data: null,
  isFetching: false,
  errorMessage: null
});

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case DirectoryActionTypes.FETCH_DIRECTORY_DATA_START:
      return {
        ...state,
        isFetching: true
      };
    case DirectoryActionTypes.FETCH_DIRECTORY_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case DirectoryActionTypes.FETCH_DIRECTORY_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  };
};

export default directoryReducer;
