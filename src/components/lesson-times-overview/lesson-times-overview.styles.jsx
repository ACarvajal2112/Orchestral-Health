import styled, { css } from 'styled-components';

const LessonTimesContentHeaderStyles = css`
  text-align: center;
  font-weight: bold;
  color: white;
`;

export const LessonTimesOverviewContainer = styled.div`
  position: absolute;
  top: 0;
  left: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 650px;
  width: 50%;
  background: white;
  border: 1px solid black;
  padding-bottom: 35px;
`;

export const LessonTimesHeader = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderSubtitle = styled.div`
  display: flex; 

  i, span {
    flex: 1;
    display: flex;
    align-items: center;
  }

  i {
    flex: 1;
  }

  i:first-of-type {
    justify-content: flex-end;
  }

  i:last-of-type {
    justify-content: flex-start;
  }
  
  & span {
    flex: 3;
    font-weight: lighter;
    letter-spacing: 1px;
    justify-content: center;
  }
`;
