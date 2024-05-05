import React, { useEffect, useState } from 'react'
import ProductsRoute from './ProductsRoute'
import AdminRoutes from '../AdminPage/AdminRoutes'
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function MainRoutes() {
const [admin,setAdmin]=useState(false)
  let data = useSelector(store => store.AuthReducer.adminAuth);

  return (
    <div>
      {data?  <AdminRoutes/>:  <ProductsRoute/>}
   
      
    </div>
  )
}
