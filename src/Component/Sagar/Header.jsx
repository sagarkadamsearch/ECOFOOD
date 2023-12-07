import React from 'react';

import { styled } from 'styled-components';
import ProductInfo from './ProductInfo';
import Slider from './Slider';


const Header = () => {


    return (
         <DIV className='container'>    
         <div className="row">
          <div className="col-md-7">
          <Slider/>
          </div>
          <div className="col-md-5">
          <ProductInfo/>
          </div>
          </div>  

     
      </DIV>
    );
};

export default Header;


const DIV = styled.div`

gap: 50px;
/* margin-top: 50px; */
DIV>div{
  margin: 0px;
}


/* @media screen and (min-width: 350px) and (max-width:550px){
display: flex;
flex-direction: row;
justify-content: space-around;
height: 280px;
background-color:#DBF0EC;
DIV>div{
  margin: 0px;
}
} */


`
