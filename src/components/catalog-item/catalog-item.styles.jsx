import styled from 'styled-components';

export const ItemContainer = styled.div`
  position: relative;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: lightgray;

  &:hover {
    cursor: pointer;

    .catalog-item-background-img {
      opacity: 0.8;
    }

    .add-item {
      opacity: 0.8;
    }
  }

  &:active {
    .add-item {
      opacity: 0.9;
    }
  }

  @media screen and (max-width:1024px){
    height: 300px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const AddItemContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  padding: 0px 20px;
  background-color: white;
  opacity: 0;
  border: 1px solid #262626;
`;

export const AddItemLabel = styled.span`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 4px;
  text-transform: uppercase;
  text-align: center;

  @media screen and (max-width: 481px){
    font-size: 18px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid black;
  background: white;
  padding: 2px;
`;

export const NameLabel = styled.span`
  flex: 3;
`;

export const PriceLabel = styled.span`
  flex: 1;
  text-align: right;
`;