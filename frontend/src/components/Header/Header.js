import React, { useState } from 'react';
import './Header.style.css';
import Badge from '@material-ui/core/Badge';
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
            <NavBarLink to='/cart'>
              <Badge badgeContent={1}>
                <CartIcon />
              </Badge>
            </NavBarLink>
          </NavBarItem>
          <NavBarButton>
            <NavBarLink btn to='/'>
              Login
            </NavBarLink>
          </NavBarButton>
          <NavBarButton>
            <NavBarLink btn to='/'>
              Register
            </NavBarLink>
          </NavBarButton>
        </NavBarMenu>
      </NavBar>
    </>
  );
};

export default Header;
