import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { MdDehaze, MdClose } from 'react-icons/md';

const mainColor = '#364f6b';
const secondaryColor = '#3fc1c9';

export const NavBar = styled.div`
  background-color: ${mainColor};
  height: 80px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 18px 80px;
  position: fixed;
  top: 0;
  left: 0;

  @media only screen and (max-width: 960px) {
    padding: 18px 20px;
  }
`;

export const NavBarLogo = styled.img`
  width: 50px;
  height: 50px;
  transition: all 1s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NavBarMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-out;

  @media only screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${mainColor};
    height: 100vh;
    width: 100vw;
    left: ${(props) => (props.menuIcon ? '-100%' : 0)};
  }
`;

export const NavBarItem = styled.li`
  width: 80px;
  text-align: center;
`;

export const NavBarLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.1rem;

  ${(props) =>
    props.btn &&
    css`
      color: black;
    `}
`;

export const NavBarButton = styled.button`
  background-color: ${secondaryColor};
  border: 1px solid ${secondaryColor};
  text-decoration: none;
  padding: 6px;
  border-radius: 8px;
  margin: 0 8px;
  transition: 0.4s;
  cursor: pointer;
  width: 110px;
  height: 35px;

  &:hover {
    background-color: #cbf4fb;
    border: 1px solid #cbf4fb;
    transform: translateY(-3px);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0, 0.25);
  }

  @media only screen and (max-width: 960px) {
    width: 60vw;
    height: 60px;
  }
`;

export const NavBarIcon = styled.div`
  display: none;
  z-index: 999;

  @media only screen and (max-width: 960px) {
    display: block;
    cursor: pointer;
    margin-left: 24px;
  }
`;

export const NavBarHamburger = styled(MdDehaze)`
  font-size: 44px;
`;

export const NavBarX = styled(MdClose)`
  font-size: 44px;
`;
