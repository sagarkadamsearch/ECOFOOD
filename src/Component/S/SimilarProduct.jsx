import React,{ useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // //visit for more info https://react-responsive-carousel.js.org/  for same like this//https://css-tricks.com/how-to-make-a-css-only-carousel/
import { Carousel } from "react-responsive-carousel";  //visit for more info https://react-responsive-carousel.js.org/
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import FruitsCard from "../FruitsCard";
import AOS from "aos"
import 'aos/dist/aos.css'

export default function SimilarProduct({data,category}) {  
   
  let similarData = category!=""&&data.length>0 ?data.filter((product)=> product.category==category):[];

useEffect(()=>{
  AOS.init({duration:2000})
  },[])
 
  return (
    <DIV className="main mx-3 d-none d-lg-grid"  data-aos="fade-left">
        <div className="headingDiv">
             <p>Similar Category Prodcuts</p>
        </div>
      {similarData.length>0 && <Carousel
        showArrows={true}   
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerMode={true} // Display three images at a time
        centerSlidePercentage={100/4} // Set the percentage based on the number of images you want to display
        emulateTouch={true} // Enable touch emulation for desktop
        swipeable={false}
        infiniteLoop={true}
        interval={1700}
        preventMovementUntilSwipeScrollTolerance={true}
        transitionTime={200}
        useKeyboardArrows={true}
        swipeScrollTolerance={0}
      >
     {similarData.map((product)=> <div className="first"><div className="second" ><FruitsCard key={product.id} {...product}/></div></div>)}
      </Carousel>}
    </DIV>
  );
}


const DIV = styled.div`
 
 
 /* background-color:#FFF4ED; */
 margin:auto;
 width:97%;
 margin-left: 0px;
 cursor:pointer;

 .headingDiv{
    text-align:left;
    margin-left:10px;
    color: black;
    font-size: 30px;
    font-weight: 500;
 }
 
 .first .second img{
  position: fixed;
  top: 10px;
  left: 30px;
  width: 100px;
  height: 80Px;
  border-radius: 50%;
  margin-top: 0px;
  margin-left: -20px;
 }

 .first .second .shadow{
  width: 250px;
  height: 140px;
  margin: 20px ;
}

.first .second .shadow:hover{
  transform:none;
}

`