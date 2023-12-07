import React, { useEffect, useState } from 'react'
import ProductsRoute from './ProductsRoute'
import AdminRoutes from '../AdminPage/AdminRoutes'
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function MainRoutes() {
const [admin,setAdmin]=useState(false)
  // let Admin = false;
  // let data = localStorage.getItem("Admin");
  let data = useSelector(store => store.AuthReducer.adminAuth);
  console.log(data)
//  let data=false;
  // useEffect(()=>{
  //   setAdmin(data)
  // },[data])

  return (
    <div>
      {data?  <AdminRoutes/>:  <ProductsRoute/>}
   
      
    </div>
  )
}
