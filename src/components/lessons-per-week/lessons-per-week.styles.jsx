import styled, { css } from 'styled-components';

export const LessonsPerWeekContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6px;
  padding: 4px 0;

  & > div {
    width: 50%;
  }
`;

// shared styles for lessons-per-week met/exceeded tool tip
const sharedExceededOrMaximumStyles = css`
  display: inline-block;

  &::after {
    position: absolute;
    pointer-events: none;
    padding: 1rem 1.5rem;
    width: 200px;
    white-space: pre-wrap;
    z-index: 10;
    bottom: -2.5rem;
    left: -8rem;
    transform: scale(0);
    transition: 
      transform ease-out 250ms,
      left ease-out 250ms;
  }
  &:hover::after {
    transform: scale(1);
    left: 1.5rem;
  }
`;

// do not display icon when lessons-per-week is not exceeded
const lessonsPerWeekIsNotExceededStyles = css`
  display: none;
`;

// styles for icon when lessons-per-week is exceeded
const lessonsPerWeekIsExceededStyles = css`
  ${sharedExceededOrMaximumStyles}
  color: #f00;

  &::after {
    content: 'Maximum 4 lessons! Remove registered or pending lessons to proceed.';
    background-color: #000;
    color: #fff;
  }
`;

// styles for icon when lessons-per-week has reached maximum 
const lessonsPerWeekIsMaximumStyles = css`
  ${sharedExceededOrMaximumStyles}
  color: #00f;

  &::after {
    content: 'You have reached the maximum number of lessons!';
    background-color: #add8e6;
    color: #000;
    border: 1px solid #000;
  }
`;

const getIsLessonsPerWeekExceededStyles = ({ numLessons }) => {
  if (numLessons <= 3) return lessonsPerWeekIsNotExceededStyles;
  if (numLessons === 4) return lessonsPerWeekIsMaximumStyles;
  return lessonsPerWeekIsExceededStyles;
}

export const LessonsPerWeekHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1.5rem;

  i {
    margin-left: 4px;
    position: relative;
    ${getIsLessonsPerWeekExceededStyles}
  }
`;

const lessonsPerWeekNumStyles = css`
  background: lightblue;
  border: 1px solid #18414e;
`;

const getIsLessonsPerWeekNumStyles = props => 
  props.isLessonsPerWeekNum ? lessonsPerWeekNumStyles : '';

export const NumLessonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: .5rem;
`;

export const NumLessons = styled.div`
  width: 20%;
  padding: .5rem 0;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  ${getIsLessonsPerWeekNumStyles}

  div:first-of-type {
    margin-left: 0;
  }
`;
