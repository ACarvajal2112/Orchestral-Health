import styled from 'styled-components';

export const LessonTimesOverviewContainer = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  min-width: 320px;
  background: white;
  border: 1px solid black;
  padding-bottom: 4rem;
  z-index: 10001;

  @media screen and (max-width:1024px){
    width: 80%;
  }

  @media screen and (max-width:660px){
    width: 98%;
  }
`;

export const CloseOverlay = styled.div`
  position: absolute;
  width: 2rem;
  right: .5rem;
  top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 150%;
  padding-bottom: 3px;
  cursor: pointer;

  &:hover {
    background: lightgray;
  }

  &:active {
    background: gray;
  }
`;

export const RegisterButtonContainer = styled.div`
  width: 75%;
  margin-top: 6px;
  text-align: right;
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