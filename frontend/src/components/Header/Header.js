import React, { useState } from 'react';
import logo from '../../images/online-shop.png';
import {
  NavBar,
  NavBarLogo,
  NavBarMenu,
  NavBarItem,
  NavBarLink,
  NavBarButton,
  NavBarHamburger,
  NavBarX,
  NavBarIcon,
} from './Header.elements';

const Header = () => {
  const [menuIcon, setMenuIcon] = useState(true);

  const handleMenuClick = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <>
      <NavBar>
        <NavBarLink>
          <NavBarLogo src={logo} />
        </NavBarLink>
        <NavBarIcon onClick={handleMenuClick}>
          {menuIcon ? <NavBarHamburger /> : <NavBarX />}
        </NavBarIcon>
        <NavBarMenu menuIcon={menuIcon}>
          <NavBarItem>
            <NavBarLink>Home</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink>Home</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink>Home</NavBarLink>
          </NavBarItem>
          <NavBarButton>
            <NavBarLink btn>Login</NavBarLink>
          </NavBarButton>
          <NavBarButton>
            <NavBarLink btn>Register</NavBarLink>
          </NavBarButton>
        </NavBarMenu>
      </NavBar>
    </>
  );
};

export default Header;
