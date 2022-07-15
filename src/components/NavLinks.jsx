import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AddProductBtn from './AddProductBtn';
import { Link } from 'react-router-dom';


function NavLinks() {
    return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">        
        <Link className='nav-link' to={"/"}>Home</Link>
        <Link className='nav-link' to={"/about"}>About</Link>
        
        <AddProductBtn />
      </Nav>
    </Navbar.Collapse>
    )
}

export default NavLinks;