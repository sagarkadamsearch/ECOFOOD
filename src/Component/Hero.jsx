import React, { useEffect } from "react";
import ButtonComponent from "./Button";
import Card from "./Card";
import iceCream from "../Image/i1.png"
import strawberry_img from "../Image/f1.png"
import Briyani from "../Image/c3.png"
import veg_Briyani from "../Image/fi1.png"
import AOS from "aos"
import 'aos/dist/aos.css'

export default function Hero() {
  useEffect(()=>{
    AOS.init({duration:2000})
    },[])
  return (
    <div className="container-fluid p-lg-5 p-2" >
      <div className="row">
        <div className="col-md-8 hero_text " data-aos="fade-up">
          <h1 className="hero_h1 max-width mt-4">We Deliver Only <span className="themeColor">Fresh Food</span></h1>
          <p className=" pe-lg-5 my-4 max-width "> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit error necessitatibus laudantium qui amet accusamus, neque rem, ullam animi ipsam esse maxime iste vitae.</p>
          {/* <ButtonComponent name="Order Now"  /> */}
        </div>
        <div className="col-md-4 mt-4 mt-lg-0 d-flex justify-content-end gap-2 heroBgCard rounded">
            <div className=" ">

          <Card name={"icecream"} image={iceCream} price={200}/>
          <Card name={"Fish"} image={veg_Briyani} price={300}/>

            </div>
            <div className="me-lg-5 pe-lg-5">
          <Card name={"strawberry"} image={strawberry_img} price={200}/>

          <Card name={"Chicken"} image={Briyani} price={200}/>
            </div>
        </div>
      </div>
    </div>
  );
}
