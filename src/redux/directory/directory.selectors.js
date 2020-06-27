import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectFamilies = createSelector(
  selectDirectory,
  directory => directory.families
);