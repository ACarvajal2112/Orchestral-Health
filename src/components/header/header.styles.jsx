import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px; 
  padding-right: 20px;
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 70px;
  margin: 10px 0 0 25px;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;  
`;
