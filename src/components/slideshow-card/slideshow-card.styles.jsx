import styled from 'styled-components';

export const SlideshowCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  // slideshow card horizontal on small-to-medium screen sizes
  @media screen and (max-width: 1024px) {
    flex-direction: row;
  }
`;

export const SlideshowContainer = styled.div`
  flex: 3;
  position: relative;
  background-color: white;
  z-index: 10; // animated h1 on homepage will move behind SlideshowContainer

  .lesson-slideshow {
    position: absolute;
    height: 100%;
    width: 100%;
    background-repeat: none;
    background-size: cover;
    background-position: center;
    border: 1px solid black;
  }

  @media screen and (max-width: 1024px) {
    flex: 2;
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  @media screen and (max-width: 1024px) {
    flex: 3;
  }
`;

export const TitleAnimationContainer = styled.div`
  flex: 1;
  position: relative;

  .lesson-title {
    display: inline-block;
    position: absolute;
    margin: 0;
    margin-left: 1rem;

    @media screen and (max-width:480px){
      font-size: 1.75rem;
    }
  }
`;

export const SubcontentContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 1.4rem;
  display: block;
  margin-left: 1rem;

  @media screen and (max-width:480px){
    font-size: 1.2rem;
  }
`;
