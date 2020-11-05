import styled from 'styled-components';

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

  @media screen and (max-width:1024px){
    padding-bottom: 20px;
  }

  @media screen and (max-width:480px){
    flex-direction: column;
  }
`;

export const LessonImgContainer = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  flex: 2; 

  @media screen and (max-width:1024px){
    height: 200px;
    align-self: flex-start;
  };

  @media screen and (max-width:480px){
    width: 100%;
    padding: 5rem;
  };
`;

export const ContentContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const InstructorContainer = styled.span`
  display: block;
  font-size: 130%;
  width: 100%;
  text-align: center;
  font-weight: lighter;

  @media screen and (max-width:768px){
    width: 85%;
    margin: 8px auto 0;
    padding-left: 1.5rem;
    text-align: left;
  }
`;

export const DescriptionContainer = styled.span`
  width: 85%;
  max-height: 5.5rem;
  margin: .5rem auto;
  line-height: normal;
  overflow: auto;
  border-radius: 10px;

  @media screen and (max-width:768px){
    display: none;
  }

  @media screen and (max-width:1024px){
    text-align: center;
  }
`;
