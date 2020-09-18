import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';

import { selectFamilies } from '../../redux/directory/directory.selectors';

import { DirectoryContainer, FamiliesContainer, FamiliesHeader } from './directory.styles';

const Directory = ({ families }) => (
  <DirectoryContainer>
    <FamiliesHeader>
      <h1>Instruments</h1>
    </FamiliesHeader>
    <FamiliesContainer>
      {families.map(({ id, ...otherFamilyProps }) => (
        <MenuItem key={id} {...otherFamilyProps} isDirectoryItem />
      ))}
    </FamiliesContainer>
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  families: selectFamilies
});

export default connect(mapStateToProps)(Directory);
