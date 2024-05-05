import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getProducts,getCount, getTotalFilteredProductCount } from '../Redux/ProductReducer/action';
import ProductCard from './ProductCard';
import { useSearchParams } from "react-router-dom";
import styled from '@emotion/styled';
import Loader from './Loader';
import { Sidebar } from './Sidebar';
import Filter from './Filter';
import AOS from "aos"
import 'aos/dist/aos.css'

export default function ProductList() {

  const [searchParams] = useSearchParams();
  const [page,setPage] = useState(1)

  const dispatch = useDispatch();

  const data = useSelector(store=>store.ProductsReducer.products);

  const TotalFilterProductsLength = useSelector(store=>store.ProductsReducer.TotalFilterProductsLength);

  const Total = Math.ceil((TotalFilterProductsLength || 0) /6)


  const paginationArray = new Array(Total).fill(0)


  const handlePage = (index)=>{
    setPage(index+1)
  }

  const handleNext = ()=>{
    if(page<Total){
      setPage(prev=>prev+1)
    }
  }
  const handlePrev = ()=>{
    if(page<1){
      setPage(prev=>prev-1)
    }
  }
  
  const paramsObj = {
    params:{
      category: searchParams.getAll("category"),
      order:searchParams.get("order"),
      sort:searchParams.get("order")?"price":null
    }
  }

  const loading = useSelector(store=>store.ProductsReducer.isLoading);

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  
  useEffect(()=>{
    dispatch(getProducts(paramsObj,page));
    dispatch(getTotalFilteredProductCount(paramsObj,page));
  },[searchParams,page]);

  useEffect(()=>{
    AOS.init({duration:2000})
    },[])
  
  if(loading){
return <Loader/>
  }
  return (

    <div className='container my-5 '>
    {/* <h2 className='text-center m-5'>Products Page</h2> */}
    <Filter/>

    <div className='row'>
  <div className='sidebar col-lg-2' data-aos="fade-up">
  <Sidebar/>
  </div>
  <div className='List col-lg-10' data-aos="fade-up">
    {/* <ProductList/> */}

    <div>
    <div className='m-4 productListMain ' >
        {data && data.map((e)=>(
          <ProductCard key={e.id} {...e}/>
          ))}
    </div>

          <div className='d-flex justify-content-center'>
            <button disabled={page==1} className='pageBtn rounded d-none d-lg-grid' onClick={handlePrev}>Prev</button>
            {paginationArray.map((item,index)=>(
              <button className='rounded' style={{
                backgroundColor: page === index + 1 ? "#DC3545" : "transparent",
                padding: "5px 10px",
                border:page === index + 1 ? "1px solid #DC3545" :  "1px solid gray",
                margin: "2px",
                color:page === index + 1 ? "white" : null
              }} key={index} onClick={()=> handlePage(index)}>{index+1}</button>
            ))}
            <button disabled={page==Total} className='pageBtn rounded px-2 d-none d-lg-grid' onClick={handleNext}>Next</button>
          </div>
    </div>
  </div>
    </div>

</div>


  )
}


