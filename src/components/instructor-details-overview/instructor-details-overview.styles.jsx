import styled from 'styled-components';

export const InstructorDetailsOverviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: .5rem auto;
  justify-content: space-evenly;

  // elements with data-tool-tip after pseudo class tool-tip styles
  [data-tool-tip]::after {
    content: attr(data-tool-tip);
    display: block;
    position: absolute;
    background-color: gray;
    padding: 1rem 1.5rem;
    color: white;
    font-size: .8em;
    border-radius: 10px;
    z-index: 10;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    transform: scale(0);
    transition:
      transform ease-out 150ms,
      bottom ease-out 150ms;
  }

  // tool tip to scale and move upwards on hover
  [data-tool-tip]:hover::after {
    transform: scale(1);
    bottom: 90%;
  }

  @media screen and (max-width:1024px){
      flex-direction: column;
    }
`;
