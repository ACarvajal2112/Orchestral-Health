import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  height: 80%;
  width: 32rem;
  margin: auto 0 auto 2rem;

  svg {
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
  margin-right: 2rem;
`;

export const OptionLink = styled(Link)`
  padding: 0 20px;
  cursor: pointer;  
  text-decoration: none;
  color: #706000;
  font-size: 1.2rem;

  &:hover {
    color: #514600;
  }

  &:active {
    color: #ccad00;
  }
`;
