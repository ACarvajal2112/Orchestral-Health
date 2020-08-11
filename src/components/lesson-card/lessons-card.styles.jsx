import styled, { css } from 'styled-components';

const contentSpanStyles = css`
  display: block;
  margin-bottom: 10px;
`;

export const LessonCardContainer = styled.div`
  margin: 10px auto 0 30px;
  min-height: 250px;
  width: 90%;
  display: flex;
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
  padding: 10px 0 0 0.5rem;
  flex: 2;
`;

export const TitleContainer = styled.span`
  ${contentSpanStyles}
  font-weight: bold;
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

export const InstructorContainer = styled.span`
  ${contentSpanStyles}
  font-size: 110%;
  margin-left: 8px;
  margin-bottom: 1rem;
`;

export const DescriptionContainer = styled.span`
  ${contentSpanStyles}
`;

export const SeeTimesContainer = styled.div`
  width: 100%;
  padding-right: 0.5rem;
  display: flex;
  justify-content: flex-end;

  button {
    display: inline-block;
    width: 10rem;
    margin-right: 8px;
  }
`;