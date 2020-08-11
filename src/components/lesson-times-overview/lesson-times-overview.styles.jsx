import styled from 'styled-components';

export const LessonTimesOverviewContainer = styled.div`
  position: fixed;
  top: 25px;
  left: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 650px;
  width: 50%;
  background: white;
  border: 1px solid black;
  padding-bottom: 35px;
  z-index: 10001;

  .register-btn {
    width: 75%;
    margin-top: 6px;
    text-align: right;
  }
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

export const LessonTimesOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.4);
  z-index: 1000;
`;