import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import VerifyOtp from './pages/VerifyOtp'
import Register from './pages/Register'
import AdminDashboard from './admin/AdminDashboard';
import DashboardOverview from './admin/DashboardOverview';
import ProductManagement from './admin/ProductManagement';
import ProductDescription from './pages/productDescription'
import ProductForm from './admin/ProductForm'
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/verifyOtp' element={<VerifyOtp />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/product/:id' element={<ProductDescription />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

        {/* Admin Routes */}
        <Route path='/admin' element={<AdminDashboard />}>
          <Route index element={<DashboardOverview />} />
          <Route path='products' element={<ProductManagement />} />
          <Route path='product/add' element={<ProductForm />} />
        </Route>
      </Routes>
    </>
  )
}

export default App