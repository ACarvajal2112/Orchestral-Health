import styled from 'styled-components';

export const InstructorAvailabilityContainer = styled.div`
  display: flex;
  position: relative;
  padding-left: 20px;
`;

export const AvailableTimesContainer = styled.div`
  flex: 2;
  
  & span {
    font-weight: bold;
    font-size: 125%;
  }
`;

export const AvailableTimesList = styled.ul`
  list-style-type: none;
  margin-top: 6px;

  /* calendar icon beside available time day value */
  &::before {

  }
`;

export const InstructorAvailabilityContainer = styled.div`
  display: flex;
  position: relative;
  border: 1px solid blue;
  padding-left: 20px;

  & ul {
    list-style-type: none;
    margin-top: 6px;
  }

  & ul::before {
    font-family: 'Font Awesome 5 Pro';
    font-weight: 900;
    content: '\f073';
    font-size: 150%;
    position: absolute;
    top: 0;
    left: -40px;
  }

  & ul li {
    margin-left: 6px;

    & .icon::before {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      display: inline-block; 
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      line-height: 1;
    }
    
    .icon-duotone {
      position: relative;
      padding-left: 1.25em; /* make space for the width of the absolutely positioned icon */

      &::before,
      &::after {
        font-family: "Font Awesome 5 Duotone";
        font-weight: 900;
        /* position both layers of the icon to the left, set our fixed-width width, horizontally center layers, and then vertically align them so they flex with different line heights */
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1.25em;
        text-align: center;
      }

      &::before {
        color: var(--fa-primary-color, inherit);
        opacity: 1;
        opacity: var(--fa-primary-opacity, 1.0);
      }

      &::after {
        color: var(--fa-secondary-color, inherit);
        opacity: var(--fa-secondary-opacity, 0.4);
      }

      &.icon-music-note::after {
        content: '\10f8cf';
      }

      &.icon-music-note::before {
        content: '\f8cf';
      }
    }

    &:first-child::before {
      font-family: 'Font Awesome 5 Pro';
      font-weight: 900;
      font-size: 150%;
      content: '\f017';
      position: absolute;
      left: -40px;
    }
  }
`;

export const AvailableTimesList = styled.div`
  flex: 2;

  & span {
    font-weight: bold;
    font-size: 125%;
  }
`;

export const Registered = styled.div`
  flex: 1;
`;
