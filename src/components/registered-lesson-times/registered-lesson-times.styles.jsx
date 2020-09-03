import styled from 'styled-components';

export const RegisteredLessonTimesContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 6px;
  padding: 4px 0;

  & > div {
    width: 50%;
  }

  /* Calendar Check icon - solid */
  &::before {
    font-family: 'Font Awesome 5 Pro';
    font-weight: 900;
    font-size: 150%;
    content: '\f274';
    position: absolute;
    left: -40px;
  }
`;

export const LessonTimesHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: top;
  padding-right: 4rem;
  font-weight: bold;
`;

export const LessonTimesResults = styled.div`
  
`;

export const RegisteredTimeLabel = styled.span`
  cursor: pointer;
  position: relative;

  /* Calendar icon - Regular */
  &::before {
    font-family: 'Font Awesome 5 Pro';
    font-weight: 400;
    content: '\f056';
    position: absolute;
    left: -24px;
    top: 2px;
    display: none;
  }

  &:hover {
    font-weight: bold;
  }

  &:hover::before {
    display: inline;
  }

  &:active::before {
    color: red;
  }
`;