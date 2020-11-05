import styled, { css } from 'styled-components';

const registerLabelStyles = css`
  color: white;
  border-radius: 4px;
`;

export const RegistrationStatusContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  margin-top: 6px;
  padding: 4px 0;
  
  & > div {
    width: 50%;
  }
  
  /* Pencil icon - solid */
  &::before {
    font-family: 'Font Awesome 5 Pro';
    font-weight: 900;
    font-size: 150%;
    content: '\f040';
    position: absolute;
    left: -40px;

    // only show icon on medium-to-large screen sizes
    @media screen and (max-width:480px){
      display: none;
    }
  }
`;

export const StatusHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 1.5rem;
  text-align: right;
`;

export const RegisteredLabel = styled.span`
  background: red;
  ${registerLabelStyles}
`;

export const NotRegisteredLabel = styled.span`
  background: green;
  ${registerLabelStyles}
`;
