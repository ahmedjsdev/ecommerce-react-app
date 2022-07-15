import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from './Logo';
import NavLinks from './NavLinks';


function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavLinks />
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
