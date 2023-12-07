import styled from '@emotion/styled';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';

function formatDate(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    
    const formattedMonth = months[month];
    
    return `${day}-${formattedMonth}-${year}`;
}

//https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500

const TestimonalCard = ({image,feedback,rating,name}) => {

    const currentDate = new Date(Date.now());
    const statarr = new Array(rating).fill(0).map((e)=> <BsStarFill key={Math.random()} style={{color:"Orange"}}/>) 
    return (
        <DIV className='shadow m-2'>
            <div  style={{display:"flex"}}>
            <div  className='imageDiv'>
                <img src={image} alt="" />
            </div>
            <div className='Name_Date' style={{display:"flex",flexDirection:"column"}}>
                <span>{name}</span>
                <span className='date' >{formatDate(currentDate)}</span>
            </div>
            <div className='rating'>{statarr} <span style={{marginLeft:"5px",fontWeight:"bold"}}>{rating}.0</span></div> 
            </div>
            <div className='feedback'>
            <div className='logo'>
            <img height="35px" width="40px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACIklEQVR4nO3Yv2vVUBQH8OMmKCr4C3FxdNPVVcVJEFHBv0JwchFRxNFBEAQR6aSLi+Cif4GiiA5WQbAotGnO97wXX855LWg1kry2tmnU1/Telxe5Xzjr54ST5ObmEoWEhISEhNTMdJruYrHLDP0C2KPW+HEcbwX0GkQNYlleLPahFX4s6RmIRsswrAvo9ZmZdPdY+yKyjaETS/BiPYwi3ePiwsWnz2z7AH3zeyq6ANglFxfu3QfSgwz9vAL/waznneDk2Rfp71/5PA5eJr3gBPftT01lmxn6ooQ/doKPwCdA763CYcnsrO5thQ/osdJqkAF6wwnu28+ybBNgb1c30HlXy6Vvn5jtZHk6DH3qBB+BTxB9sqaB6MVW+NP55gn6rdyg05k70gafuKPn1rxcYlmUzB9og0+A3apsEGVb2uATw55VNeh2u9vb4BOgn6oaFOs29Cig9yH2cbBPL+oVi13p9Xo7x8Gn/GtY2eAfNdiz90817VPVCjF8E10Q6Z9u0ieIad0GS5P625+Tb5/++Iyup6BXm/KpvL2tV/q6KZ/KW9yat/lrUz7Fkp51MCFryqckSXZAdG6DE5psyi8C2M0NNRC7TQ36lC9TxYej1nT0Zxzb4Sb9IiJ6nKHfazSYoCHi2y+Sn81AtD/8rdWX+ZkmjYlfJI7tEEOfD9HgwbrxEfjLEbETEL3LYu8XT4yVYe9Y9I6Lvynx7IeEhISE/L/5BcFT3k5LdYX2AAAAAElFTkSuQmCC"/>            
            </div>
            <p>{feedback}</p>
            </div>
            </DIV>
    );
};

export default TestimonalCard;





const DIV = styled.div`
width: 400px;
border-top-left-radius: 30px;
border-bottom-right-radius: 30px;
height: 200px;

margin-left: 40%;
backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.3s;
/* background-color:white; */
.imageDiv {
    width: 80px;
    height: 75px;
    overflow: hidden;
    position :relative;
    top: 3px;
    left: 4px;
}


.imageDiv > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 50%;
   
}

.Name_Date{
  position: relative;
  top: 10px;
  left: 15px;
}

.date{
   position: relative;
   left: -17px;
   font-size: small;
}

.Name_Date>span:nth-child(1){
    font-weight:bold
}


.rating{
   position:relative;  
   left: 100px;
   top: 20px;
   height: fit-content;
}

.feedback{
    width: 300px;
    position: relative;
    top: -10px;
    left: 60px;
    line-height: 1.2;
    text-align: left;
}
.feedback .logo img{
    height:35px;
    width:40px;
}

.logo{
    position: relative;
    top: 19px;
    left: -40px;
}
.logo img{
z-index: 2;
}
`