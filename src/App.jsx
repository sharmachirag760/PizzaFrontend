import './App.css';
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom';
import Signup from './Pages/Auth/Signup';
import Login from './Pages/Auth/Login.jsx';
import NotFound from './Pages/NotFound';
import ProductDetails from './Pages/Products/ProductDetails'
import CartDetails from './Pages/Cart/CartDetails'

import Denied from './Pages/Denied'
import AddProduct from './Pages/Admin/Addproduct'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/denied" element={<Denied />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/admin/addProduct' element={<AddProduct />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/cart' element={<CartDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
