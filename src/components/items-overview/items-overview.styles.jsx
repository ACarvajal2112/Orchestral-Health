import styled from 'styled-components';

export const ItemsPreviewContainer = styled.div`
  display: grid;
  // 3 items per row for large screen sizes
  grid-template-columns: repeat(3, 1fr);

  // 2 items per row for medium-size screen sizes
  @media screen and (max-width: 1024px){
    grid-template-columns: repeat(2, 1fr);
  }

  // 1 item per row for small screen sizes
  @media screen and (max-width:480px){
    grid-template-columns: 1fr;
  }
`;
