import React from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';


function Navigation1() {
  return <div>
    <div>

      <Navbar className="nav1"  expand="md" dark>
        <NavbarBrand href="/">REACT CRUD</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">
                All Users
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/add">
                ADD user
              </NavLink>
            </NavItem>
         
          </Nav>
          {/* <NavbarText>
            Simple Text
          </NavbarText> */}
        </Collapse>
      </Navbar>

    </div>

  </div>;
}

export default Navigation1;
