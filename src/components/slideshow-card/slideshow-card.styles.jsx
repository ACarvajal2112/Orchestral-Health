import styled from 'styled-components';

export const SlideshowCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const SlideshowContainer = styled.div`
  flex: 3;
  position: relative;
  background-color: gray;

  .lesson-slideshow {
    position: absolute;
    height: 100%;
    width: 100%;
    background-repeat: none;
    background-size: cover;
    background-position: center;
    border: 1px solid black;
  }
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-top: none;
`;

export const TitleAnimationContainer = styled.div`
  flex: 1;
  position: relative;

  .lesson-title {
    display: inline-block;
    position: absolute;
    margin: 0;
    margin-left: 1rem;
  }
`;

export const SubcontentContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  button {
    width: 80%;
    align-self: center;
  }
`;

export const Subtitle = styled.span`
  font-weight: lighter;
  font-size: 1.4rem;
  display: block;
  margin-left: 1rem;
`;
