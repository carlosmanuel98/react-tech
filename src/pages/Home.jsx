
import { Container, Row, Col, Card} from "react-bootstrap";

export default function Home(){
    return (
       <Container className="mt-5 pb-5 min-vh-100 d-flex flex-column">
            <h1>Bienvenido</h1>
            <p>Encontrarás el producto que necesitás!</p>

        <Row className="mt-4">
            <Col md={4}>
            <Card style={{ height: '300px' }} className="text-center vh-50 bg-light text-dark">
                <Card.Body>
                <Card.Title>Diseños únicos</Card.Title>
                <Card.Text>Estampados originales y personalizados para vos.</Card.Text>
                 <Card.Img
                    src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
                    alt="Remera producto"
                    style={{
                        height: '200px',
                        width: '100%',
                        objectFit: 'cover',
                        borderRadius: '0.25rem'
                    }}
                />
                </Card.Body>
            </Card>
            </Col>
            <Col md={4}>
            <Card style={{ height: '300px' }} className="text-center vh-50 bg-light text-dark">
                <Card.Body>
                <Card.Title>Calidad premium</Card.Title>
                <Card.Text>Prendas cómodas de excelente terminación.</Card.Text>
                <Card.Img
                    src="https://i.imgur.com/T8oq9X2.jpeg"
                    alt="Tshit producto"
                    style={{
                        height: '200px',
                        width: '100%',
                        objectFit: 'cover',
                        borderRadius: '0.25rem'
                    }}
                />
                </Card.Body>
            </Card>
            </Col>
            <Col md={4}>
            <Card style={{ height: '300px' }} className="text-center vh-50 bg-light text-dark">
                <Card.Body>
                <Card.Title>Atención personalizada</Card.Title>
                <Card.Text>Consultanos y hacé tu pedido a medida.</Card.Text>
                <Card.Img
                    src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                    alt="Campera producto"
                    style={{
                        height: '200px',
                        width: '100%',
                        objectFit: 'cover',
                        borderRadius: '0.25rem'
                    }}
                />
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    )
}