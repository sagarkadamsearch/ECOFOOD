import React, { useEffect } from 'react'
import ProductList from '../Component/ProductList'
import ProductCard from '../Component/ProductCard'
import pine_img from "../Image/f6.png"
import Filter from '../Component/Filter'
import { Sidebar } from '../Component/Sidebar'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Loader from '../Component/Loader'

export default function Products() {

  const loading = useSelector(store=>store.ProductsReducer.isLoading);
  console.log(loading)

//   if(loading){
// return <h1>Loading</h1>
//   }
  




return (
    <div className='container my-5'>
        {/* <h2 className='text-center m-5'>Products Page</h2> */}
        <Filter/>
        <div className='d-flex'>
      <div className='sidebar'>
      <Sidebar/>
      </div>
      <div className='List'>
        <ProductList/>
      </div>
        </div>

    </div>
  )
}


const DIV = styled.div`
  .sidebar{
    width: 20% !important;
  }
  .List{
width: 80%;
  }
`