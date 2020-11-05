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

    // only show icon on medium-to-large screen sizes
    @media screen and (max-width:480px){
      display: none;
    }
  }
`;

export const DayOfWeekContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
  padding-right: 1.5rem;
`;

export const AvailableTimesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AvailableTimeLabel = styled.span`
  cursor: pointer;
  position: relative;

  /* Add icon - Regular */
  &::before {
    font-family: 'Font Awesome 5 Pro';
    font-weight: 400;
    content: '\f055';
    position: absolute;
    left: -1.2rem;
    top: 2px;
    display: none;
  }

  &:hover {
    font-weight: bold;
  }

  &:hover::before {
    display: inline;
  }

  &:active {
    text-shadow: 1px 1px 1px rgba(150, 150, 150, 1);
  }
`;
