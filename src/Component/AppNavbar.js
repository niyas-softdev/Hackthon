import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CollapsibleExample() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="d-flex gap-3 align-items-center">
          <img
            src="https://img.freepik.com/free-vector/heart-cross-cardiogram-neon-sign_1262-15587.jpg?t=st=1709530424~exp=1709534024~hmac=f11d0e0d86d5976dc62940795dac071c2bec48904aa4aff00600431052a2ed69&w=996"
            alt=""
            width={40}
            className="rounded-circle"
          />
          <span>HEALTH CARE BOT</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
