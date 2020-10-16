import styled, { css } from 'styled-components';

const contentSpanStyles = css`
  display: block;
  margin-bottom: 10px;
`;

export const LessonCardContainer = styled.div`
  flex: 3;
  display: flex;
  min-height: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const LessonImgContainer = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex: 1;
`;

export const ContentContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const InstructorContainer = styled.span`
  font-size: 130%;
  margin-left: 2rem;
  font-weight: lighter;
  ${contentSpanStyles}
`;

export const DescriptionContainer = styled.span`
  width: 85%;
  margin: 0 auto;
  ${contentSpanStyles}
`;

export const SeeTimesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1rem;

  button {
    display: inline-block;
    width: 50%;
    margin: 0 auto;
  }
`;
