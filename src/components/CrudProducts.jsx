import React, { useEffect, useState } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';

const API_URL = 'https://api.escuelajs.co/api/v1/products';

const CrudProducts = () => {
const [productos, setProductos] = useState([]);
const [show, setShow] = useState(false);
const [form, setForm] = useState({
title: '',
description: '',
price: '',
image: '',
categoryId: 1
});
const [editId, setEditId] = useState(null);

const getProductos = async () => {
try {
    const res = await fetch(`${API_URL}?limit=100&offset=0`);
    const data = await res.json();
    const sorted = data.sort((a, b) => b.id - a.id);
    setProductos(sorted);
} catch (error) {
    console.error('Error cargando productos:', error);
    Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'No se pudieron cargar los productos'
    });
}
};

const handleClose = () => {
setShow(false);
setForm({ title: '', description: '', price: '', image: '', categoryId: 1 });
setEditId(null);
};

const handleShow = (producto) => {
setShow(true);
if (producto) {
    setForm({
    title: producto.title,
    description: producto.description,
    price: producto.price,
    image: producto.images?.[0] || '',
    categoryId: producto.category?.id || 1
    });
    setEditId(producto.id);
}
};

const handleSubmit = async (e) => {
e.preventDefault();

const productData = {
    title: form.title,
    price: form.price,
    description: form.description,
    categoryId: form.categoryId,
    images: [form.image]
};

const method = editId ? 'PUT' : 'POST';
const url = editId ? `${API_URL}/${editId}` : API_URL;

try {
    await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData)
    });

    handleClose();
    await getProductos();
    Swal.fire({
    icon: 'success',
    title: editId ? 'Producto actualizado' : 'Producto creado',
    text: 'La operación se realizó correctamente',
    timer: 1500,
    showConfirmButton: false
    });

} catch (error) {
    console.error('Error guardando producto:', error);
    Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'No se pudo guardar el producto'
    });
}
};

const eliminarProducto = async (id) => {
    Swal.fire({
    title: '¿Eliminar producto?',
    text: 'Esta acción no se puede deshacer.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
    }).then(async (result) => {
    if (result.isConfirmed) {
        try {
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        await getProductos();

        Swal.fire({
            icon: 'success',
            title: 'Producto eliminado',
            timer: 1500,
            showConfirmButton: false
        });
        } catch (error) {
        console.error('Error al eliminar:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo eliminar el producto'
        });
        }
    }
});

};

useEffect(() => {
getProductos();
}, []);

return (
<div className="container mt-4">
    <h2>CRUD de Productos (Escuelajs API)</h2>
    <Button className="mb-3" onClick={() => handleShow()}>Agregar Producto</Button>
    <Table striped bordered hover responsive>
    <thead>
        <tr>
        <th>Título</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Imagen</th>
        <th>Categoría</th>
        <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
        {productos.map(prod => (
        <tr key={prod.id}>
            <td>{prod.title}</td>
            <td>{prod.description}</td>
            <td>${Number(prod.price).toFixed(2)}</td>
            <td>
            {prod.images?.[0] ? (
                <img src={prod.images[0]} alt={prod.title} width={50} />
            ) : (
                <span>Sin imagen</span>
            )}
            </td>
            <td>{prod.category?.name || 'N/A'}</td>
            <td>
            <Button size="sm" onClick={() => handleShow(prod)}>Editar</Button>{' '}
            <Button size="sm" variant="danger" onClick={() => eliminarProducto(prod.id)}>Eliminar</Button>
            </td>
        </tr>
        ))}
    </tbody>
    </Table>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>{editId ? 'Editar' : 'Agregar'} Producto</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
            <Form.Label>Título</Form.Label>
            <Form.Control
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            required
            />
        </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            required
            />
        </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label>Precio</Form.Label>
            <Form.Control
            type="number"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
            required
            />
        </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label>Imagen (URL)</Form.Label>
            <Form.Control
            value={form.image}
            type='url'
            placeholder="https://picsum.photos/id/237/200/300"
            onChange={e => setForm({ ...form, image: e.target.value })}
            required
            />
        </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label>ID de Categoría</Form.Label>
            <Form.Control
            type="number"
            value={form.categoryId}
            onChange={e => setForm({ ...form, categoryId: e.target.value })}
            min={1}
            max={6}
            required
            />
        </Form.Group>
        <Button type="submit" className="mt-2">Guardar</Button>
        </Form>
    </Modal.Body>
    </Modal>
</div>
);
};

export default CrudProducts;
