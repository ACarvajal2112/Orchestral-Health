import styled from 'styled-components';

export const LessonTimesListContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  margin-top: 6px;

  & > div {
    width: 50%;
  }
  
  /* Clock icon - solid */
  &::before {
    font-family: 'Font Awesome 5 Pro';
    font-weight: 900;
    font-size: 150%;
    content: '\f017';
    position: absolute;
    left: -40px;
    top: -2px;
  }
`;

export const DayOfWeekContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  padding-right: 4rem;
`;

export const AvailableTimesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AvailableTimeLabel = styled.span`
  cursor: pointer;
  position: relative;

  /* Calendar icon - Regular */
  &::before {
    font-family: 'Font Awesome 5 Pro';
    font-weight: 400;
    content: '\f055';
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
