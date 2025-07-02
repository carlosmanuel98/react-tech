import React, { useContext } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CartContext } from './context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Cart = () => {
const { cart, setCart } = useContext(CartContext);

const removeFromCart = (id) => {
setCart(prev => prev.filter(product => product.id !== id));
};

const total = cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);

if (cart.length === 0) {
return (
    <Container className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
        <FontAwesomeIcon icon={faShoppingCart} size="4x" className="mb-3 text-muted" />
        <h3 className="mb-2">Tu carrito está vacío</h3>
        <p className="text-muted">Agregá productos para verlos acá.</p>
    </Container>
);
}

return (
<Container className="mt-4 min-vh-100 d-flex flex-column">
    <h3>Carrito de compras</h3>
    <Table striped bordered hover responsive className="mt-3">
    <thead>
        <tr>
        <th>Producto</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Total</th>
        <th></th>
        </tr>
    </thead>
    <tbody>
        {cart.map((item) => (
        <tr key={item.id}>
            <td>{item.title}</td>
            <td>${Number(item.price).toFixed(2)}</td>
            <td>{item.quantity}</td>
            <td>${(Number(item.price) * item.quantity).toFixed(2)}</td>
            <td>
            <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(item.id)}
            >
                Eliminar
            </Button>
            </td>
        </tr>
        ))}
    </tbody>
    </Table>
    <h5 className="text-end">Total: ${total.toFixed(2)}</h5>
</Container>
);
};

export default Cart;
