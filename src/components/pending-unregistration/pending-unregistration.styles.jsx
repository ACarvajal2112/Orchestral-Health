import styled from 'styled-components';

export const PendingUnregistrationContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: 6px;
  padding: 4px 0;

  & > div {
    width: 50%;
  }
`;

export const PendingUnregistrationHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: top;
  padding-right: 1.5rem;
  text-align: right;
`;

export const UnregistrationTimeLabel = styled.span`
  cursor: pointer;
  position: relative;
  display: block;

  /* Add icon - Regular */
  &::before {
    font-family: 'Font Awesome 5 Pro';
    font-weight: 400;
    content: '\f055';
    position: absolute;
    left: -1.2rem;
    top: 2px;
    display: none;
  }

  &:hover {
    font-weight: bold;
  }

  &:hover::before {
    display: inline;
  }

  &:active {
    text-shadow: 1px 1px 1px rgba(150, 150, 150, 1);
  }
`;

export const PendingUnregistrationList = styled.div`
  // add margin top to divs which are not the first child
  div:not(:first-child){
    margin-top: .5rem;
  }
`;
