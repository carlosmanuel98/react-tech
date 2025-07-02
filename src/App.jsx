import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import Products from './pages/Products';
import Login from './components/Login';
import { CartProvider } from './components/context/CartContext';
import { AuthProvider } from './components/context/AuthContext';
import Cart from './components/Cart';
import CrudProducts from './components/CrudProducts';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Home/>}/>
          <Route path='/Products' element={<Products/>} />
          <Route path='/Cart' element={<Cart/>} />
          {/* Ruta protegida */}
          <Route
            path="/Crud"
            element={
              <ProtectedRoute>
                <CrudProducts />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    </AuthProvider>
  )
}

export default App
