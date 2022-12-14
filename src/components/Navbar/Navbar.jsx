import { useState } from "react";
import {
  HamburgerIconContainer,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  NavbarContainer,
  NavbarWrapper,
} from "./NavbarStyles";
import { DiReact } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTodoContext } from "../../context/TodoContextProvider";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const { tasks } = useTodoContext();
  const taskPendingCount = tasks.filter((task) => !task.done).length;
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <LogoContainer>
            <DiReact size={50} color={"#61dbfb"} />
          </LogoContainer>
          <HamburgerIconContainer onClick={handleClick}>
            {click ? (
              <FaTimes size={30} color={"#61dbfb"} />
            ) : (
              <FaBars size={30} color={"#61dbfb"} />
            )}
          </HamburgerIconContainer>
          <Menu click={click}>
            <MenuItem onClick={handleClick}>
              <MenuItemLink
                to={"/"}
                className={`${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Home
              </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={handleClick}>
              <MenuItemLink
                to={"/task"}
                className={`${({ isActive }) => (isActive ? "active" : "")} ${
                  taskPendingCount ? "pending" : "no-pending"
                }`}
              >
                Tasks
              </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={handleClick}>
              <MenuItemLink
                to={"/pokemon"}
                className={`${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Pokedex
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};
