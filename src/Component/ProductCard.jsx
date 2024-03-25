import React from 'react'

import styled from '@emotion/styled'
import {FaCartPlus, FaStar} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({image,title,price,category,rating,_id}) {

  const navigate = useNavigate()

  const handleSinglePage = (_id)=>{
    navigate(`/singlePage/${_id}`)
  }
  
  return (
   <DIV onClick={()=>handleSinglePage(_id)}>
    <div className='shadow rounded p-2 d-flex justify-content-between'>
        <div className='float-start'> 

        <img src={image} alt="" />
        <span className='d-flex rating'>
        <h6 className='text-danger mb-2 fw-bold'>{rating}</h6>
        <FaStar className='text-warning ms-1'/>
        </span>
        </div>
  <div className='text '>
      <FaCartPlus className='text-danger fs-1 float-end mt-2 pe-1 ' />
        <h5 className='text-end '>{title}</h5>
        <p className='text-end mt-3 mb-1'>{category}</p>
        <h6 className='text-end  pe-1'><span>₹</span>{price}</h6>
  </div>    
    </div>
   </DIV>
  
  )
}


const DIV = styled.div`

.shadow{
    width: 280px;
  /* height: 190px; */
  margin: 20px ;
  /* background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0)); */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.3s;
}

.shadow:hover{
  transform:scale(1.1);
}

img {
    /* margin-top: -15px; */
    /* margin-left:-30px; */
    width: 100px;
    height: 80px;
    border-radius: 50%;
    /* mix-blend-mode: multiply; */
  }
  span{
    color: red;
    font-weight: bolder;
  }
  h5,h6,p{
    margin-top: 0  !important;
    margin-bottom:0;
}
  h5{
    /* margin-left:-20px !important; */
    font-size: 20px;
    /* padding-right:20px; */
    margin-top: 65px !important;
  }

.rating{
    position: relative;
    bottom: -35px;
    left: 25px;
  }

  .text{
    margin-top: 5px;
    margin-right: 18px;
  }

`