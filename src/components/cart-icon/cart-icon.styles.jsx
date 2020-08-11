import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const IncrementerContainer = styled.span`
  position: absolute;
  font-weight: bold;
  top: 4px;
  left: 50%;
`;
