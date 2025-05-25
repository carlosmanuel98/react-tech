// import { Card, Spinner } from 'react-bootstrap';
import { Container, Row, Col, Card, Button, Form, Badge, Stack } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function Productos() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
    const showSuccessModal = () => {
        Swal.fire({
            title: '¡Producto agregado!',
            text: 'El producto fue añadido al carrito.',
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    }

  useEffect(() => {

    fetch('https://api.escuelajs.co/api/v1/products?limit=18&offset=10')
    .then(resp => resp.json())
    .then(data => {
        console.log('data', data);
      setProducts(data);
      setLoading(false);
    })
    .catch(err => {
      console.error('error de carga API', err);
      setLoading(false);
    });
  },[]);

  return (
    <Container className='mt-4'>
      <h1>Productos</h1>
      <Row className="g-4">
        {products.map(product => (
            <Col key={product.id} md={4}>
            <Card className="m-2 h-100">
                <div style={{ height: '200px', overflow: 'hidden' }}>
                <Card.Img
                    src={product.images[0] || product.images[1] || product.images[2]}
                    style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
                </div>
                <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{product.title}</Card.Title>
                <Stack direction="horizontal" gap={2}>
                    <Badge pill bg="dark">
                        {product.category.name}
                    </Badge>
                </Stack>

                <Card.Text>
                    <strong>Price: $ {product.price || 'N/A'}</strong>
                </Card.Text>
                <Form.Select aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </Form.Select>
                <Button  onClick={showSuccessModal} variant="success" size="sm">Agregar al carrito</Button>
                </Card.Body>
            </Card>
            </Col>
        ))}
      </Row>
    </Container>
  )
}

