import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #252A34;
  border-radius: none;
  height: 75px;
  font-size: 2rem;
`;
export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 4px;
    width: 25px;
    background: #FF2E63;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #FF2E63;
  transition: all 0.3s ease-in;
  font-size: 2rem;
  font-family: 'Playball', cursive;

  &:hover {
    color: #FF2E63;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    background-color: #fff;
    border: 1px solid #FF2E63;
    border-radius: 10px;
    width: 100%;
  }
`;
export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;
export const Logo = styled(Link)`
  padding: 1rem 0;
  color: #FF2E63;
  text-decoration: none;
  font-weight: 800;
  font-size: 2rem;

  i {
    font-family: 'Playball', cursive;
  }

  span {
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 2rem;
    color: #fff;
  }
`;
