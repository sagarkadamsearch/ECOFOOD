import React,{useEffect,useState} from 'react';
import { styled } from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ButtonComponent from '../Button';
import axios from 'axios';
import { loginOnload, productOnload } from '../../Redux/AuthReducer/action';
import Swal from 'sweetalert2';
import AOS from "aos"
import 'aos/dist/aos.css'

function ProductInfo({title,about,rating,price}) {

  
    const navigate = useNavigate();
    const {id} =  useParams();
    const isAuth=useSelector(store=>store.AuthReducer.isAuth)
    const order = useSelector(store=>store.AuthReducer.loginUser.Order);
    const dispatch=useDispatch();
    const [maniData,setMainData] = useState({});
    console.log(order,"orderin")
    
   
   const statarr = new Array(5).fill(0).map((e)=> <BsStarFill key={Math.random()} style={{color:"Orange"}}/>) 

   const handleCart=()=>{

   if(isAuth===false){
       navigate("/login");
   }
   else{
       const token = sessionStorage.getItem('token');
       axios.get(process.env.REACT_APP_API_backendUrl + `users/cart/addItem/${id}`,{
        headers:{
           'authorization':`Bearer ${token}`
        }
       })
       .then((res)=>{
         if(res.data?.Msg?.includes("success")){
            Swal.fire({
                title: 'Added to Cart',
                text: 'product added Successfully!',
                icon: 'success', // Set the icon to 'success'
                confirmButtonColor: '#DC3545'
              });
         }
         else{
            Swal.fire({
                title: 'Already Present in Cart',
                text: 'Item already Present in Cart',
                icon: 'error',
                confirmButtonColor: '#DC3545'
              })
         }
       })
       .catch((err)=>{
         return alert(err);
       })
    }
     }
   

   useEffect(()=>{
     axios.get(process.env.REACT_APP_API_backendUrl + `products/${id}`)
     .then((res)=>{
       console.log("Hello sagar",res) 
       setMainData(res.data);
     })
     .catch((err)=>{
        alert(err);
     })
   },[])

   useEffect(()=>{
    AOS.init({duration:2000})
    },[])


    return (
       <div data-aos="fade-up" className='mt-4 px-4 px-lg-0'>

        {/* <Link to={"/cartPage"}>Cart</Link> */}
           {maniData && <h1 className='mt-4'>{maniData.title}</h1>}

            <div className='rating my-2'>{statarr}</div> 
            <h5>48 reviews | 75k unit Sold</h5>
            <p>{maniData?.about}</p>
            <h5 className='amountSpan fw-bold' >MRP: <span className='amount'>₹ {maniData?.price+1000}</span ></h5> 
            <div className='paySave'>
                <div className='d-flex'>
                    <h4 className='pay my-2'>You Pay: ₹ {maniData?.price} </h4>
                
                       <h5>(SAVE ₹ 1000)</h5>
                </div>
            </div>    
            <p className='tax mb-3'>(inclusive of all taxes)</p>
       <ButtonComponent  onClick={handleCart} name="Add to cart" />
        </div>
    );
}

export default ProductInfo;


