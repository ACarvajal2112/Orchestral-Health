import styled, { css } from 'styled-components';

const contentSpanStyles = css`
  display: block;
  margin-bottom: 10px;
`;

export const LessonCardContainer = styled.div`
  flex: 3;
  display: flex;
  position: relative;
  min-height: 250px;
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  
  &:hover {
    -webkit-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width:480px){
    flex-direction: column;
  }
`;

export const LessonImgContainer = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex: 1;

  @media screen and (max-width:1024px){
    height: 200px;
    width: 100%;
    align-self: flex-start;
  };

  @media screen and (max-width:480px){
    width: 100%;
    padding: 5rem;
  };
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
  margin: .5rem auto;
  padding: 4px 6px;
  max-height: 5.5rem;
  overflow: auto;
  border-radius: 10px;

  @media screen and (max-width:480px){
    display: none;
  }
`;

export const SeeTimesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: .5rem 0;

  button {
    display: inline-block;
    width: 50%;
    margin: 0 auto;

    @media screen and (max-width:1024px){
      width: 80%;
    }

    @media screen and (max-width:481px){
      width: 100%;
    }
  }
`;
