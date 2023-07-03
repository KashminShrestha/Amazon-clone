import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './component/Navbar'
import Home from './page/Home'
import Products from './page/Products'
import Signin from './page/Signin'
import Signup from './page/Signup'
import Contact from "./page/Contact"
import Data from './page/Data'
import Display from './component/fetch/Display'
import Display1 from './page/axios/Display1'
import EmailVerification from './component/EmailVerification'
import Forget from './component/Forget'
import ResetPassword from './component/ResetPassword'
import Addcategorypage from './page/admin/Addcategorypage'
import AdminDashboard from './component/admin/AdminDashboard'
import Admincategory from './component/admin/Admincategory'
import Addcategory from './component/admin/Addcategory'
import UpdateCategory from './component/admin/UpdateCategory'
import UseState from './component/hooks/UseState'
import Addproduct from './component/admin/Addproduct'
import Adminproduct from './component/admin/Adminproduct'
import UpdateProduct from './component/admin/UpdateProduct'
import AdminUser from './component/admin/AdminUser'
import AdminUserUpdate from './component/admin/AdminUserUpdate'
import AdminRoutes from './selectiveRoutes/adminRoutes'
import UserRoutes from './selectiveRoutes/UserRoutes'
import ProductDetails from './component/ProductDetails'
import Cart from './page/Cart'
import Shipping from './component/Shipping'
import Payment from './page/Payment'
import PaymentSuccess from './page/PaymentSuccess'



const Routess = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/nav" element={<Navbar />} />
          <Route path="" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/UseState" element={<UseState />} />
          <Route path="/props" element={<Data />} />
          <Route path="/fetch" element={<Display />} />
          <Route path="/axios" element={<Display1 />} />
          <Route path="/user/verification/:token" element={<EmailVerification />} />
          <Route path="/forgetpassword" element={<Forget />} />
          <Route path="/user/resetpassword/:token" element={<ResetPassword />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/" element={<AdminRoutes />}>
            <Route path="/addcategory" element={<Addcategorypage />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/category" element={<Admincategory />} />
            <Route path="/admin/addcategory" element={<Addcategory />} />
            <Route path="/admin/category/updatecategory/:id" element={<UpdateCategory />} />
            <Route path="/admin/addproduct" element={<Addproduct />} />
            <Route path="/admin/product" element={<Adminproduct />} />
            <Route path="/admin/updateproduct/:id" element={<UpdateProduct />} />
            <Route path="/admin/users" element={<AdminUser />} />
            <Route path="/admin/user/updateuser/:id" element={<AdminUserUpdate />} />

          </Route>
          <Route path="/" element={<UserRoutes />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Payment />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/success" element={<PaymentSuccess />} />


          </Route>



















        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routess