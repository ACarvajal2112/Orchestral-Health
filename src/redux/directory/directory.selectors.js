import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectIsDirectoryDataFetching = createSelector(
  [selectDirectory],
  directory => directory.isFetching
);

export const selectFamilies = createSelector(
  [selectDirectory],
  directory => directory.families ? directory.families : []
);
