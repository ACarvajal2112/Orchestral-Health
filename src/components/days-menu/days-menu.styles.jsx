import styled from 'styled-components';

export const DaysMenuContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative; 
  flex-direction: row;
  justify-content: space-around;

  /* Calendar icon - solid */
  &::before {
    font-family: 'Font Awesome 5 Pro';
    font-weight: 900;
    font-size: 150%;
    content: '\f073';
    position: absolute;
    left: -40px;
    top: 4px;

    // only show icon on medium-to-large screen sizes
    @media screen and (max-width:480px){
      display: none;
    }
  }
`;
