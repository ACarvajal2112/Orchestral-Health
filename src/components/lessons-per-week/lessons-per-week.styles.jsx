import styled from 'styled-components';

export const LessonsPerWeekContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6px;
  padding: 4px 0;

  & > div {
    width: 50%;
  }
`;

export const LessonsPerWeekHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 4rem;
  font-weight: bold;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: flex-start;

  button {
    width: 20%;
    margin: 0 4px;
  }

  button:first-of-type {
    margin-left: 0;
  }
`;
