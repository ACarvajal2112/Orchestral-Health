import styled, { css } from 'styled-components';

const directoryItemStyles = css`
  
  & {
    mid-width: 30%;
    height: 300px;
  }

  &:first-child {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const familyOverviewStyles = css`
  height: 250px;
`;

const getButtonStyles = props => 
  props.isDirectoryItem ? directoryItemStyles : familyOverviewStyles;

export const MenuItemContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s ease-out;
    }
  }

  .background-image {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }

  .content {
    height: 90px;
    padding: 0 25px;
    background-color: white;
    opacity: 0.7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;

    .title {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 4px;
      text-transform: uppercase;
    }

    .subtitle {
      font-weight: lighter;
      font-size: 16px;
    }
  }

  ${getButtonStyles}
`;