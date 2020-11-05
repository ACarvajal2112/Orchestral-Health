import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  z-index: 500;
  width: 245px;
  height: 340px;
  padding: 10px 10px 0;
  border: 1px solid black;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const CartItemsContainer = styled.div`
  overflow: auto;
  height: 260px;
  display: flex;
  flex-direction: column;
`;
