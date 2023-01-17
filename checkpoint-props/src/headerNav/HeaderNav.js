import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FcSynchronize } from "react-icons/fc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageAlt } from "react-icons/bi";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const HeaderNav = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container >
         <div>
           <Navbar.Brand href="#home">
            {" "}
            <img
              alt="logo"
              style={{ width: "150px", heigth: "70px", marginRight: "70px" }}
              src="data:image/png;base64,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"
            />{" "}
          </Navbar.Brand>
         </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link href="#home">Home</Nav.Link>
              {/*  */}
              <NavDropdown title="Learn" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  My courses
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  One To One
                </NavDropdown.Item>{" "}
                <NavDropdown.Item href="#action/3.2">Calendar</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Performance{" "}
                </NavDropdown.Item>
             
              </NavDropdown>
              {/*  */}
              <NavDropdown title="Connect" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Community</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Global Leaderboard
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Recruiters
                </NavDropdown.Item>
               
              </NavDropdown>
              {/*  */}
              <NavDropdown title="Explore" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Library</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Store 
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  GoMyTech
                </NavDropdown.Item>
              
              </NavDropdown>
            <Navbar.Brand   href="#home">
                <FcSynchronize />
              </Navbar.Brand>
              <Navbar.Brand href="#home">
                {" "}
                <IoMdNotificationsOutline />
              </Navbar.Brand>
              <Navbar.Brand href="#home">
                {" "}
                <BiMessageAlt />
              </Navbar.Brand>

              
              <NavDropdown title="Lafi Olfa" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
               
          
              </NavDropdown>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
