import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box; 
  }

  html, body, #root, .app {
    height: 100%;
    min-height: 100%;
  }
`;

export const MainContentContainer = styled.div`
  width: 94%;
  margin-left: auto;
  margin-right: auto;
`;
