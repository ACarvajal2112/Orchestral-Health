import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectIsDirectoryDataFetching = createSelector(
  [selectDirectory],
  directory => directory.isFetching
);

export const selectDirectoryData = createSelector(
  [selectDirectory],
  directory => directory.data
);

export const selectFamilies = createSelector(
  [selectDirectoryData],
  data => data.families
);

export const selectLessonsData = createSelector(
  [selectDirectoryData],
  data => data.lessons
);

export const selectIsDirectoryLoaded = createSelector(
  [selectDirectory],
  directory => !!directory.data
);
