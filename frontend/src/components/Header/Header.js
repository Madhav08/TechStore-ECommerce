import React, { useState } from 'react';
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
  CartIcon,
} from './Header.elements';

const Header = () => {
  const [menuIcon, setMenuIcon] = useState(true);

  const handleMenuClick = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <>
      <NavBar>
        <NavBarLink to='/'>
          <NavBarLogo src={'/images/online-shop.png'} />
        </NavBarLink>
        <NavBarIcon onClick={handleMenuClick}>
          {menuIcon ? <NavBarHamburger /> : <NavBarX />}
        </NavBarIcon>
        <NavBarMenu menuIcon={menuIcon}>
          <NavBarItem>
            <NavBarLink to='/'>Home</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink to='/'>Home</NavBarLink>
          </NavBarItem>
          <NavBarItem>
            <NavBarLink to='/cart'>
              <CartIcon />
            </NavBarLink>
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
