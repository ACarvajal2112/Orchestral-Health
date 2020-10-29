import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100vh - 120px);

  /* vertically align directory and lessons slideshow,
     decrease height of header for medium screen sizes */
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: calc(100vh - 110px);
  }

  // decrease height of header for small screen sizes
  @media screen and (max-width: 480px){
    height: calc(100vh - 80px);
  }
`;
