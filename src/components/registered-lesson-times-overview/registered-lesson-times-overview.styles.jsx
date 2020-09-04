import styled from 'styled-components';

export const RegisteredLessonTimesOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 6px;
  padding: 4px 0;

  & > div {
    width: 100%;
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
