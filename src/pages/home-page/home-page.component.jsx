import React from 'react';
import { connect } from 'react-redux';

import Directory from '../../components/directory/directory.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { updateDirectory } from '../../redux/directory/directory.actions';

import { firestore, convertDirectorySnapshotToMap } from '../../firebase/firebase.utils';

const DirectoryWithSpinner = WithSpinner(Directory);

class HomePage extends React.Component {

  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateDirectory } = this.props;
    const collectionRef = firestore.collection('directory');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const directoryMap = convertDirectorySnapshotToMap(snapshot);
      updateDirectory(directoryMap);
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { loading } = this.state;
    return (
      <div className='home-page'>
        <DirectoryWithSpinner isLoading={loading} />
    </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  updateDirectory: directoryMap => 
    dispatch(updateDirectory(directoryMap))
});

export default connect(null, mapDispatchToProps)(HomePage);
