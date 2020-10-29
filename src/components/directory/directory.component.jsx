import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';

import MenuItem from '../menu-item/menu-item.component';
import PreviewHeader from '../preview-header/preview-header.component';

import { selectFamilies } from '../../redux/directory/directory.selectors';

import { DirectoryContainer, FamiliesContainer } from './directory.styles';

const Directory = ({ families }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/shop');
  }

  return (
    <DirectoryContainer>
      <PreviewHeader isClickable>
        <h1 onClick={handleClick}>Instruments</h1>
      </PreviewHeader>
      <FamiliesContainer>
        {families.map(({ id, ...otherFamilyProps }) => (
         <MenuItem key={id} {...otherFamilyProps} isDirectoryItem />
       ))}
      </FamiliesContainer>
    </DirectoryContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  families: selectFamilies
});

export default connect(mapStateToProps)(Directory);
