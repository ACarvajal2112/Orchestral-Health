import styled from 'styled-components';

export const CheckoutOverviewContainer = styled.div`
  width: 100%;  
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0;
  padding: 4px .5rem;
  background: #333;
  color: white;

  @media screen and (max-width: 480px){
    padding: 4px 0;
  }
`;

export const HeaderBlock = styled.div`
  width: 20%; 
  text-align: center;

  // remove first header block for small screen sizes
  &:first-of-type {
    @media screen and (max-width:480px){
      display: none;
    }
  }

  // 4 components at small screen sizes to take up full width
  @media screen and (max-width:480px){
    width: 25%;
  }
`;

export const HeaderTitle = styled.span`
  font-weight: bolder;
  font-size: 18px;

  @media screen and (max-width:480px){
    font-size: 0.9em;
  }
`;

export const CheckoutItemList = styled.ul`

  list-style-type: none;
  padding: 0;
  margin: 0;

  li { 
    background: gray; 

    &:nth-child(2n + 1) { 
      background: lightgray; 
    }
  }
`;

export const ItemsTotalContainer = styled.div`
  font-size: 1.5rem;

  span { 
    font-weight: bold; 
  }
`;
