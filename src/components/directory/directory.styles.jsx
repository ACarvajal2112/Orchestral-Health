import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  z-index: 10; // animated h1 on homepage will move behind DirectoryContainer
  background-color: white;

  // remove gap between directory & lessons slideshow on medium screen sizes
  @media screen and (max-width: 1024px) {
    margin-right: unset;
  }
`;

export const FamiliesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  height: 100%;

  // re-adjust grid on medium screen sizes
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
