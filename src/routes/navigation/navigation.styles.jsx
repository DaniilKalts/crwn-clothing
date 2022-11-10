import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainer = styled(NavLink)`
    height: 100%;
    width: 70px;
    padding: 25px;
`

export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;

    @media screen and (max-width: 475px){
      width: 70%;
    }
`

export const Link = styled(NavLink)`
      padding: 10px 15px;
      cursor: pointer;
      &.active{
        color: red;
      }
`