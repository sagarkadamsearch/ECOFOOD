import styled from "@emotion/styled";
import React, { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

export default function Card({image,name,price}) {

useEffect(()=>{
  AOS.init({duration:2000})
  },[])

  return (
    <DIV data-aos="fade-up">

    <div className="smallCard shadow text-center pb-4 rounded">
      <img
        src={image}
        alt="strawberry-img"
      />
      <h3>{name}</h3>
      <p>sweet and healthy</p>
      <h6><span>₹</span> {price}</h6>
    </div>
    </DIV>
  );
}

const DIV = styled.div`

div{
  display: grid;
  place-items: center;
  width: 150px;
  height: 170px;
  /* color: #777777; */
  margin: 80px 20px 20px 20px;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.3s;
}

div:hover{
  transform:scale(1.1);
}
  
  img {
    margin-top: -65px;
    width: 120px;
    border-radius: 50%;
   
  }
  span{
    color: red;
  }
  /* h3{
    margin-top: -20px;
  } */
  h6{
    padding: 0px;
    margin: 0;
    font-weight: bold;
  }
`;
