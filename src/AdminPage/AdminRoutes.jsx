import React from 'react'
import AdminSidebar from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Comment from './pages/Comment'
import Analytics from './pages/Analytics'
import AdminProductList from './pages/AdminProductList'
import AdminProducts from './pages/AdminProducts'
import Sales from './pages/Sales'
import { AdminProductManage } from '../Component/H/AdminProductManage'
import { AdminAddProduct } from '../Component/H/AdminAddProduct'
import { AdminEditProduct } from '../Component/H/AdminEditProduct'
import { AdminAbout } from './pages/AdminAbout'

export default function AdminRoutes() {
  return (
    <div  style={{
      backgroundColor: "#f4f4f4",
      color: "black",
    }}  >
        
      <AdminSidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/AdminAbout" element={<AdminAbout/>} />
          <Route path="/sales" element={<Sales/>} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/AdminProduct" element={<AdminProducts/>} />
          <Route path="/AdminProductList" element={<AdminProductList />} />
          <Route path="/adminList" element={<AdminProductManage />} />
        <Route path="/addNewProduct" element={<AdminAddProduct />} />
        <Route path="/edit/:id" element={<AdminEditProduct/>} />
        </Routes>
      </AdminSidebar>
    </div>
  )
}
