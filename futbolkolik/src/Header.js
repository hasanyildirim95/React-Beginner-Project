import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


function Header(props) {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (

        <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          Futbolkolik
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
            <NavItem>
              <NavLink href="/components/">Anasayfa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Haftanın Maçları</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Puan Tablosu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Haberler</NavLink>
            </NavItem>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

    );



}
export default Header;