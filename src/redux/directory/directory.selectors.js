import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectFamilies = createSelector(
  selectDirectory,
  directory => directory.families
);

export const selectFamiliesForPreview = createSelector(
  selectFamilies,
  families => families ? Object.keys(families).map(key => families[key]) : []
);