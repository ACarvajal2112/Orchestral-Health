import styled from 'styled-components';

export const FamilyPreviewContainer = styled.div`
  text-align: left;
`;

export const MenuItemsPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
`;

export const FamilyTitle = styled.div`
  width: 100%;
  background-color: #4b2b11;
  z-index: -1;
  margin: .5rem 0;

  h1 {
    position: relative;
    margin: 0;
    padding: 0 .5rem;
    left: 4rem;
    display: inline-block;
    text-transform: uppercase;
    background: white;
    cursor: pointer;
  }
`;
