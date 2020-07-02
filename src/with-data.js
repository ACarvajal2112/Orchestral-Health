import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectFamily } from './redux/shop/shop.selectors';
import { selectFamiliesForPreview } from './redux/directory/directory.selectors';

const withData = (WrappedComponent, dataToSelect) => {
  class WithData extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: props.data
      };
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }

  const mapStateToProps = (state, ownProps) => {
    if (dataToSelect === 'isDirectory') {
      return createStructuredSelector({ data: selectFamiliesForPreview });
    }
    else if (dataToSelect === 'isFamilyOverview') {
      return ({
        data: selectFamily(ownProps.match.params.familyId)(state)
      });
    }
  };

  return connect(mapStateToProps)(WithData);
};

export default withData;