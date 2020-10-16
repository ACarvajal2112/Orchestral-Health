import styled, { css } from 'styled-components';

const checkoutItemChildrenStyles = css`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  height: 8rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid black;
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
`;

export const RemoveContainer = styled.div`
  & i {
      cursor: pointer;
  }
  ${checkoutItemChildrenStyles}
`;
