import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  background-color: #333;
`;

export const NavbarWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  height: 50px;
`;

export const HamburgerIconContainer = styled.div`
  display: flex;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  position: absolute;
  top: 80px;
  left: ${({ click }) => (click ? 0 : "-100%")};
  background-color: #333;
  transition: left 0.3s;
  @media (min-width: 768px) {
    flex-direction: row;
    position: initial;
    width: unset;
    height: 80px;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
  transition: all 0.3s;
  @media (min-width: 768px) {
    width: inherit;
  }
  &:hover {
    background-color: #61dbfb;
  }
`;

export const MenuItemLink = styled(NavLink)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  &.active {
    color: #61dbfb;
  }
  &:hover {
    color: #333;
  }
`;
