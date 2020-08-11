import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 33%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    & .add-item {  
      opacity: 0.7;
    }
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const AddItemContainer = styled.div`
  position: absolute;
  background-color: white;
  opacity: 0;
  padding: 6px 25px;
  border: 1px solid #262626;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const NameContainer = styled.span`
  flex: 3;
`;

export const PriceContainer = styled.span`
  flex: 1;
  text-align: right;
`;