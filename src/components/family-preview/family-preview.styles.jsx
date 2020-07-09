import styled from 'styled-components';

export const FamilyPreviewContainer = styled.div`

  position: relative;
  padding: 0 5px;

  .family-title {
    display: inline;
    text-transform: uppercase;
    width: 100px;
    height: 40px;

    &::before {
      content: '';
      display: block;
      width: 40px;
      height: 100%;
      background-color: black;
    }

    &::after {
      content: '';
      display: block;
      width: 40px;
      height: 100%;
      background-color: black;
    }
  }
  
  .menu-items-preview {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 5px;
  }
`;