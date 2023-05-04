import { Outlet, Link } from "react-router-dom";
import './nav-bar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Layout = () => {
    return (
        <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Apta Epay</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="register">Registration</Nav.Link>
            <Nav.Link href="/booking">Guest Booking</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <Outlet />
    </>
    )
};

export default Layout;



