import React from 'react';
import {Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Test</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/shop" activeStyle>
                        Shop
                    </NavLink>
                    <NavLink to="/careers" activeStyle>
                        Careers
                    </NavLink>
                </NavMenu>
                <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;