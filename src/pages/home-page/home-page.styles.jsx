import styled, { css } from 'styled-components';

const appHeight = css`
  min-height: calc(100vh - 120px);
`;

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  ${appHeight}
  padding: 0 1rem;
`;
