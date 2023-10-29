import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/images/logo.png";
import "./Header.css";
import LoginCard from "./Login";

function CollapsibleExample() {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "24%", padding: "10px" }}
          />
          <strong>WebGuard</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto"
            style={{ marginLeft: "26%", fontWeight: 650 }}
          >
            <NavDropdown title="Pricing" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features" style={{ fontWeight: "50px" }}>
              Resources
            </Nav.Link>
            <Nav.Link href="#pricing">Supports</Nav.Link>
            <Nav.Link href="#pricing">Partners</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="button">
              <LoginCard />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="button">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
