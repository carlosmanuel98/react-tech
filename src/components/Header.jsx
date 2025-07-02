import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './context/CartContext';
import { AuthContext } from './context/AuthContext';
export default function Header() 
{
const { cart } = useContext(CartContext);
const { isAuthenticated, logout, username } = useContext(AuthContext);
const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return(
    <Navbar bg="dark" variant="dark" expand="lg">   
      <Container>
        <Navbar.Brand as={Link} to="/">Inicio</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Productos</Nav.Link>
            {(isAuthenticated) &&
              <Nav.Link as={Link} to="/crud">CRUD</Nav.Link>
            }
          </Nav>
          {(!isAuthenticated) ? (
            <Button variant="outline-light" as={Link} to="/login" className="me-2">Login</Button>
          ) : (
            
            <Nav className="d-flex align-items-center gap-2">
            <span className="text-white me-2">Hola, {username}</span>
            <Button variant="outline-light">
              <Link to="/cart" className="text-white position-relative">
                  <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                  {totalItems > 0 && (
                    <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                      {totalItems}
                    </Badge>
                  )}
                </Link>
            </Button>
            <Button variant="outline-light" onClick={logout}>
              Cerrar sesión
            </Button>
          </Nav>
          )}
        </Navbar.Collapse>   
      </Container>
    </Navbar>
  )
}