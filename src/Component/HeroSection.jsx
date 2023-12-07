import React, { useEffect } from 'react'
import ButtonComponent from './Button'
import styled from '@emotion/styled'
import heroImg from "../Image/hero.png";
import {useNavigate} from "react-router-dom";
import AOS from "aos"
import 'aos/dist/aos.css';

export default function HeroSection() {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/product")
    }

   
    useEffect(()=>{
      AOS.init({duration:2000})
      },[])
  
  return (
    <DIV className='container '>
        <div className="row">
            <div className="col-md-6 p-3 p-lg-5 my-4 order-2 order-lg-1 text"     data-aos="fade-up">
                <h1 className='my-3'> <span className='themeColor'>HUNGRY? </span>Wait We are comming in just <span className='themeColor'>30 MIN</span></h1>
                <p className='mb-4 mt-lg-4 fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, totam. Porro maiores ratione quia, voluptas quas obcaecati </p>
                <ButtonComponent name="Order Now >" onClick={handleClick}/>
            </div>
            <div className="col-md-6 order-1 order-lg-2"     data-aos="fade-up">
             <img className='w-100' src={heroImg} alt="" />
            </div>
        </div>

    </DIV>
  )
}


const DIV = styled.div`
    h1{
        font-size: 50px;
    }
.text{
    margin-top: 160px;
}
`