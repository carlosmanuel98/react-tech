import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { AuthContext } from './context/AuthContext';

const Login = () => {
const [user, setUser] = useState('');
const [pass, setPass] = useState('');
const navigate = useNavigate();
const { login } = useContext(AuthContext);

const handleSubmit = (e) => {
e.preventDefault();
if (user === 'admin' && pass === 'admin') {
    const userData = { username: 'admin', authenticated: true };
    login(userData);
    navigate('/');
} else {
    Swal.fire({
        title: 'Error de inicio de sesión',
        text: 'Usuario o contraseña inválido. Por favor, verificá tus datos.',
        icon: 'error',
        confirmButtonText: 'Ok'
    });
}
};

return (
<Container className="d-flex justify-content-center align-items-center min-vh-100">
    <Row className="w-100 justify-content-center">
    <Col md={6} lg={4}>
        <Card className="shadow-lg p-4">
        <Card.Body>
            <h2 className="text-center mb-4">Iniciar Sesión</h2>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="text" value={user} onChange={e => setUser(e.target.value)} required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" value={pass} onChange={e => setPass(e.target.value)} required />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
                Ingresar
            </Button>
            </Form>
        </Card.Body>
        </Card>
    </Col>
    </Row>
</Container>
);
};

export default Login;