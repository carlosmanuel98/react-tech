# 🛒 Setup del Proyecto React - E-commerce

Este proyecto utiliza React para construir una tienda online con alertas, navegación, componentes visuales y consumo de APIs públicas.

---

## 📦 Instalación de dependencias

Instalá las siguientes librerías necesarias para el proyecto:

```bash
npm install sweetalert2
```
> Para mostrar alertas interactivas (por ejemplo, al agregar un producto al carrito).

```bash
npm install react-bootstrap bootstrap
```
> Para usar componentes visuales listos como `Card`, `Navbar`, `Button`, etc.

```bash
npm install react-router-dom
```
> Para la navegación entre rutas como `/`, `/products`, `/cart`, etc.

```bash
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/fontawesome-svg-core
```
> Para mostrar íconos como el carrito de compras con Font Awesome.

---

## 🎨 Configuración del CSS en `main.jsx`

Reemplazá el CSS por defecto de React con los estilos de Bootstrap. En tu `main.jsx`, agregá:

```jsx
import 'bootstrap/dist/css/bootstrap.min.css'; // Agrega estilos de Bootstrap
```

Y si tenés un `index.css` que no usás, podés eliminarlo o comentarlo.

---

## 🌐 API utilizada – Platzi Fake Store

Se utiliza una API REST pública para obtener productos reales de indumentaria y otros rubros.

📎 Documentación de la API:  
[https://api.escuelajs.co/docs#/products/ProductsController_getAll](https://api.escuelajs.co/docs#/products/ProductsController_getAll)

🔗 Endpoint de productos:

```
https://api.escuelajs.co/api/v1/products
```

Esta API retorna datos como:

- `id`
- `title`
- `price`
- `description`
- `images[]` (URL de imagen)
- `category.name`

---

## 🧠 Siguientes pasos sugeridos

- Crear un componente `<ProductCard />` que muestre imagen, título y botón de acción.
- Usar `SweetAlert2` para confirmar cuando se agrega un producto.
- Implementar `CartContext` para manejar el carrito con `React Context API`.
- Mostrar un ícono de carrito con contador (`Badge`) en el `Header`.

---

## ✨ Resultado final esperado

Una tienda funcional con:

- Navegación entre páginas
- Cards visuales con productos reales
- Carrito de compras con ícono e interacción
- Diseño responsive y limpio usando Bootstrap

---
