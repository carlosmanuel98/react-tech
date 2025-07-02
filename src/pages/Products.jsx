// import { Card, Spinner } from 'react-bootstrap';
import { useEffect, useState, useContext } from 'react'
import { Container, Row, Col, Card, Button, Form, Badge, Stack } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { CartContext } from '../components/context/CartContext';

export default function Productos() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, cart } = useContext(CartContext);
    // console.log('cart',cart);
    
  const addToCartModal = (product) => {
    // console.log('product', product);
    addToCart(product);
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
                </Form.Select>
                  <Button onClick={() => addToCartModal(product)} variant="success" size="sm">
                    Agregar al carrito
                  </Button>
                </Card.Body>                
            </Card>
            </Col>
        ))}
      </Row>
    </Container>
  )
}

