import styled from 'styled-components';

export const SlideshowOverviewContainer = styled.div`
  flex: 1;
  position: relative;
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    margin-left: unset;
  }
`;
