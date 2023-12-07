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

    const [cartData,setCartData]=useState()
    const [dataPro,setData]=useState()
    const navigate = useNavigate();
    const {id} =  useParams();
     const store=useSelector(store=>store.AuthReducer)
     const isAuth=useSelector(store=>store.AuthReducer.isAuth)
    const data = useSelector(store=>store.ProductsReducer.products);
    const logId = useSelector(store=>store.AuthReducer.loginUser.id);
    const order = useSelector(store=>store.AuthReducer.loginUser.Order);
    const dispatch=useDispatch();
    const[update,setupdate]=useState(false)
    console.log(order,"orderin")

  let maniData;
    if(dataPro!==undefined){

        const main = dataPro.filter((e=>e.id==id))
        
        maniData = main[0]
        console.log(maniData,"dataSigCart");
    }

    // main data is singleData
    
  
   const statarr = new Array(5).fill(0).map((e)=> <BsStarFill key={Math.random()} style={{color:"Orange"}}/>) 

   const handleCart=()=>{
  console.log(isAuth,"isAuth")

   if(isAuth===false){
       console.log("navigate")
       navigate("/login");
   }
   else{

    console.log(store,"store")
    //make id dynamic with params()
    console.log(logId,order,"order")
    console.log(maniData,"maniData")

    let dat=order.filter((e,i)=>{return e.id==maniData.id})
    console.log(dat,"dat")
   
    if(dat.length==1){
       console.log("already present")
       Swal.fire({
        title: 'Already Present in Cart',
        text: 'Item already Present in Cart',
        icon: 'error',
        confirmButtonColor: '#DC3545'
      })
    }else{
        console.log("add cart")

        axios.patch(`https://grocryapi.onrender.com/LoggedIn/${logId}`,{
        Order:[...order,maniData]
         })
        .then((res)=>{console.log(res,"success message newdata")
        
            
        console.log("add cart message")
         Swal.fire({
             title: 'Added to Cart',
             text: 'product added Successfully!',
             icon: 'success', // Set the icon to 'success'
             confirmButtonColor: '#DC3545'
           });

          dispatch(loginOnload(logId))
           })
           .catch((err)=>{console.log("log",err)})
        }

    }

     setupdate(prev=>!prev)

     }
    //user api request

    // axios.patch(`https://grocryapi.onrender.com/Users/1`,{
    //     Order:[...cartData,maniData]
    // })
    // .then((res)=>{console.log(res)})

   




   useEffect(()=>{
    //make id dynamic with params()
   axios.get("https://grocryapi.onrender.com/Users/1")
   .then((res)=>{console.log(res.data.Order,"resOrder")
    const arr=res.data.Order
    //arr.push(res.data.Order)
    setCartData(arr)
   })
   axios.get("https://grocryapi.onrender.com/Products")
   .then((res)=>{console.log(res.data,"rproduct")
    const arr=res.data
    //arr.push(res.data.Order)
    setData(arr)
   })

   dispatch(productOnload)
   dispatch(loginOnload(logId))
   console.log("getData user id 1")
   },[])

   useEffect(()=>{
    AOS.init({duration:2000})
    },[])
//    useEffect(()=>{
//     axios.get(`https://grocryapi.onrender.com/Products/${id}`)
//    .then((res)=>{console.log(res.data,"rsingleData")
//     const arr=[]
//     arr.push(res.data)
//     setData(arr)
//    })
//    },[])


console.log("prodcutinfo")

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


