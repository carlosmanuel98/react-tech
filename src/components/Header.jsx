import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Header() 
{
    return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Productos</Nav.Link>
          </Nav>
         <Nav className="d-flex align-items-center gap-2">
            <Button variant="outline-light">
                <FontAwesomeIcon icon={faShoppingCart} /> {/* Ícono carrito */}
            </Button>
            <Button variant="outline-light">Cerrar sesión</Button>
        </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}