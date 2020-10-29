import styled, { css } from 'styled-components';

const checkoutItemChildrenStyles = css`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width:480px){
    width: 25%;
  }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  height: 8rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 .5rem;
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid black;

  @media screen and (max-width: 480px){
    padding: 0;
  }
`;

export const DescriptionContainer = styled.div`
  ${checkoutItemChildrenStyles}
`;

export const QuantityContainer = styled.div`
  ${checkoutItemChildrenStyles}
`;

export const PriceContainer = styled.div`
  ${checkoutItemChildrenStyles}
`;

export const ProductImgContainer = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  ${checkoutItemChildrenStyles}

  @media screen and (max-width:480px){
    display: none;
  }
`;

export const RemoveContainer = styled.div`
  & i {
      cursor: pointer;
  }
  ${checkoutItemChildrenStyles}
`;
