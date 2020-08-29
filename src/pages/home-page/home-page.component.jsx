import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Directory from '../../components/directory/directory.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { selectIsDirectoryDataFetching } from '../../redux/directory/directory.selectors';
import { fetchDirectoryDataStartAsync } from '../../redux/directory/directory.actions';

const DirectoryWithSpinner = WithSpinner(Directory);

class HomePage extends React.Component {

  componentDidMount() {
    const { fetchDirectoryDataStartAsync } = this.props;
    fetchDirectoryDataStartAsync();
  }

  render() {
    const { isDirectoryDataFetching } = this.props;
    return (
      <div className='home-page'>
        <DirectoryWithSpinner isLoading={isDirectoryDataFetching} />
    </div>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  isDirectoryDataFetching: selectIsDirectoryDataFetching
});

const mapDispatchToProps = dispatch => ({
  fetchDirectoryDataStartAsync: () => dispatch(fetchDirectoryDataStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
