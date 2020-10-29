import styled, { css } from 'styled-components';

const directoryItemStyles = css`
  // first directory menu item will take up 2 columns on large screen sizes
  &:first-child {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  // on small-to-medium screens 3 menu items in first row, 2 in second row
  @media screen and (max-width: 1024px) {

    // 1st row, 2nd item taking up 2 columns
    &:nth-last-child(4) {
      grid-column-start: 3;
      grid-column-end: 5;
    }

    // 1st row, 3rd item taking up 2 columns
    &:nth-last-child(3) {
      grid-column-start: 5;
      grid-column-end: 7;
    }

    // 2nd row, 1st item taking up 3 columns
    &:nth-last-child(2) {
      grid-column-start: 1;
      grid-column-end: 4
    }
    
    // 2nd row, last item taking up 3 columns
    &:last-child {
      grid-column-start: 4;
      grid-column-end: 7;
    }
  }
`;

const familyOverviewStyles = css`
  height: 250px;
  margin-bottom: 0.5rem;
`;

const instrumentPreviewStyles = css`
  height: 250px;
`;

// type of MenuItem passed as param determines distinct styling
const getButtonStyles = props => {
  if (props.isDirectoryItem) return directoryItemStyles;
  if (props.isFamilyOverviewItem) return familyOverviewStyles;
  return instrumentPreviewStyles;
}

export const MenuItemContainer = styled.div`
  border: 1px solid black;
  background-clip: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      opacity: 0.8;
      transform: scale(1.1);
      transition: transform 6s ease-out;
    }

    & .content {
      opacity: 0.9;
      -webkit-box-shadow: 10px 10px 21px 0px rgba(77,77,77,1);
      -moz-box-shadow: 10px 10px 21px 0px rgba(77,77,77,1);
      box-shadow: 10px 10px 21px 0px rgba(77,77,77,1);
    }
  }
  ${getButtonStyles}
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 20px;
  background-color: white;
  border: 1px solid #262626;
  opacity: 0.7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const TitleContainer = styled.span`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 4px;
  text-transform: uppercase;

  @media screen and (max-width: 481px){
    font-size: 18px;
  }
`;

export const SubtitleContainer = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;