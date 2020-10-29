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
  font-weight: bold;
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

  &:active::before {
    color: red;
  }
`;
