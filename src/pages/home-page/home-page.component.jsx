import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Directory from '../../components/directory/directory.component';
import SlideshowOverview from '../../components/slideshow-overview/slideshow-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { selectIsDirectoryLoaded } from '../../redux/directory/directory.selectors';
import { fetchDirectoryDataStart } from '../../redux/directory/directory.actions';

import { HomePageContainer } from './home-page.styles';

const DirectoryWithSpinner = WithSpinner(Directory);
const SlideshowOverviewWithSpinner = WithSpinner(SlideshowOverview);

const HomePage = ({ fetchDirectoryDataStart, isDirectoryLoaded }) => {
  useEffect(() => {
    fetchDirectoryDataStart();
  }, [fetchDirectoryDataStart]);

  return (
    <HomePageContainer>
      <DirectoryWithSpinner isLoading={!isDirectoryLoaded} />
      <SlideshowOverviewWithSpinner isLoading={!isDirectoryLoaded} />
    </HomePageContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  isDirectoryLoaded: selectIsDirectoryLoaded
});

const mapDispatchToProps = dispatch => ({
  fetchDirectoryDataStart: () => dispatch(fetchDirectoryDataStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
