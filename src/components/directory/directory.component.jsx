import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import DirectoryItem from '../directory-item/directory-item.component';
import { selectFamilies } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = ({ families }) => (
  <div className='directory'>
    {families.map(({ id, ...otherFamilyProps }) => (
        <DirectoryItem key={id} {...otherFamilyProps} />
      ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  families: selectFamilies
});

export default connect(mapStateToProps)(Directory);