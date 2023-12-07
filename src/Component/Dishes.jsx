import React, { useEffect } from 'react'
import DishesCard from './DishesCard'
import FruitsCard from './FruitsCard'
import {Link, useNavigate} from "react-router-dom"
import briyani_img from "../Image/r2.png"
import Vegbriyani_img from "../Image/r5.png"
import Fish_img from "../Image/fi3.png"
import Chicken_img from "../Image/c4.png"
import AOS from "aos"
import 'aos/dist/aos.css';

export default function Dishes() {
  const navigate = useNavigate();
  const handleProduct = ()=>{
    navigate("/product");
  }

  useEffect(()=>{
    AOS.init({duration:2000})
    },[])

  return (
    <div  data-aos="fade-up">
        <span className='d-flex justify-content-between'>
         <h3 className='ms-lg-5 ps-lg-4 my-3'>Our Fresh Dishes</h3>
            <Link className='me-lg-5 pe-lg-4 text-danger fw-bold mt-3 text-decoration-none' to="/product">Sell more item</Link>
        </span>

    <div className='d-flex justify-content-center flex-wrap my-4'>
        <FruitsCard image={briyani_img} title={"Briyani"} category={"Dish"} price={500}/>
        <FruitsCard image={Vegbriyani_img} title={"Veg Briyani"} category={"Dish"} price={400}/>
        <FruitsCard image={Fish_img} title={"Fish Curry"} category={"Dish"} price={450}/>
        <FruitsCard image={Chicken_img} title={"Chicken"} category={"Dish"} price={650}/>

        </div>
    </div>
  )
}
