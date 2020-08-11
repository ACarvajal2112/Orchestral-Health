import DirectoryActionTypes from './directory.types'

const INITIAL_STATE = ({
  families: null
});

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case DirectoryActionTypes.UPDATE_DIRECTORY:
      return {
        ...state,
        families: action.payload
      };
    default:
      return state;
  };
};

export default directoryReducer;