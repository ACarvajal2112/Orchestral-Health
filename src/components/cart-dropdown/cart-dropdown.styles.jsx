import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  z-index: 5;
  width: 245px;
  height: 340px;
  padding: 10px;
  border: 1px solid black;
  background-color: white;
  display: flex;
  flex-direction: column;

  button {
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
  }
`;

export const CartItemsContainer = styled.div`
  overflow: scroll;
  height: 260px;
  display: flex;
  flex-direction: column;
`;