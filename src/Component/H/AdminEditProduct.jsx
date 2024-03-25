import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { useNavigate, useParams } from 'react-router-dom';
import { editAdminProduct } from '../../Redux/ProductReducer/action';
import AOS from "aos"
import 'aos/dist/aos.css'
import Swal from 'sweetalert2';

export const AdminEditProduct=()=>{
    const {id}=useParams();
    const[data,setData]=useState({})
    const navigate=useNavigate()
     const dispatch=useDispatch()
     const products = useSelector((store) => store.ProductsReducer.adminProducts);
     console.log(products)
     const[price,setPrice]=useState(0);
     const[name,setName]=useState("");
     const[image,setImage]=useState("");
     const[about,setAbout]=useState("");
     const[category,setCategory]=useState("");
 
    const handleEdit=()=>{
     const userData={
         title:name,price,category,about,image
     }
     Swal.fire({
      title: 'Product Edited Successfully',
      text: 'Your Product is Edited Successfully!',
      icon: 'success', // Set the icon to 'success'
      confirmButtonColor: '#DC3545'
    });
    dispatch(editAdminProduct(id,userData)).then((res)=>{
        navigate(-1)
    })
    }
     useEffect(()=>{
       
         const arr=products.filter((el)=>{return el.id===+id})
        setPrice(arr[0].price);
        setName(arr[0].title)
        setCategory(arr[0].category)
        setImage(arr[0].image)
        setAbout(arr[0].about)
     // console.log(price,title,"price title")
     AOS.init({duration:2000})
     },[])

 return(
    <DIV >
     <div className='mt-4 text-center' data-aos="fade-left">
     <h1>Edit <span className="text-danger">Product</span></h1>

         <input className='form-control my-3' type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />

         <input className='form-control my-3' type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} />
  
         <select name="" className='form-control my-3' id="" value={category} onChange={(e)=>{setCategory(e.target.value)}}>
            <option value="Fruits">fruits</option>
            <option value="Vegetables">vegitable</option>
            <option value="Chicken">chicken</option>
            <option value="Seafood">seafood</option>
            <option value="Mutton">mutton</option>
         </select>

         <input className='form-control my-2' type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}} />

         <input className='form-control my-3' type="text" value={about} onChange={(e)=>{setAbout(e.target.value)}} />

         <button onClick={handleEdit}>submit</button>   
     </div>
     </DIV>
 )
 }
 

 const DIV = styled.div`
  width: 400px;
  margin: auto;
  /* padding: 30px;  */

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  input,
  select {
    height: 40px;
    width: 100%;
    font-size: 20px;

  }

  button {
    width: 50%;
    height: 35px;
    border:1px solid #DC3545;
    background-color: #DC3545;
    color: white;
  }
  button:hover {
    background-color:white ;
    color: #DC3545;
  }
 `