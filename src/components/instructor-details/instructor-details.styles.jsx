import styled, { css } from 'styled-components';

const experienceContent = css`
  content: '\f5f3';
`;

const stylesContent = css`
  content: '\f8bf';
`;

const onlineInPersonContent = css`
  content: '\f109';
`;

const getDetailsStyles = props => {
  if (props.isExperienceDetails) return experienceContent;
  if (props.isStylesDetails) return stylesContent;
  return onlineInPersonContent;
}

export const InstructorDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 1rem 0;

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

  [data-tool-tip]:hover::after {
    transform: scale(1);
    bottom: 100%;
  }
`;

export const DetailsLabel = styled.span`
  display: block;
  position: relative;
  padding-left: 2.5rem;

  &::before {
    font-family: 'Font Awesome 5 Pro';
    font-weight: 900;
    font-size: 2rem;
    position: absolute;
    left: -1.5rem;
    top: 50%;
    transform: translateY(-50%);
    background: #cbae2d;
    border-radius: 50%;
    padding: .5rem;
    ${getDetailsStyles}
  }
`;