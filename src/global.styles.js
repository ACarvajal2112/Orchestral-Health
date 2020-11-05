import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box; 
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const MainContent = styled.div`
  margin: 0;
  padding: 0 2%;
`;

export const ImportantText = styled.span`
  font-weight: bold;
`;
