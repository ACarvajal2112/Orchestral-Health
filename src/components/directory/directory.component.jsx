import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import { selectFamiliesForPreview } from '../../redux/directory/directory.selectors';

import { DirectoryContainer } from './directory.styles';

const Directory = ({ families }) => (
  <DirectoryContainer>
    {families.map(({ id, ...otherFamilyProps }) => (
      <MenuItem key={id} {...otherFamilyProps} isDirectoryItem />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  families: selectFamiliesForPreview
});

export default connect(mapStateToProps)(Directory);