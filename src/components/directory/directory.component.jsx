import React from 'react';

import DirectoryItem from '../directory-item/directory-item.component';
import withData from '../../with-data';

import { DirectoryContainer } from './directory.styles';

const Directory = ({ data }) => {
  console.log('Directory Data: ', data);
  return (
    <DirectoryContainer>
      {data.map(({ id, ...otherFamilyProps }) => (
        <DirectoryItem key={id} {...otherFamilyProps} isDirectoryItem />
      ))}
    </DirectoryContainer>
  )
};

export default withData(Directory, 'isDirectory');