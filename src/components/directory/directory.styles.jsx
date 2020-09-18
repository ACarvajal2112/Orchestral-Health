import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  z-index: 10;
  background-color: white;
`;
export const FamiliesContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  height: 100%;
`;

export const FamiliesHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  h1 {
    margin: 0 0 0 .5rem;
  }
`;
