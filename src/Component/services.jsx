import styled from '@emotion/styled'
import React, { useEffect } from 'react'
import chef from "../Image/chef1.png"


export default function Services() {


  return (
    <DIV className='container mb-5 text-center'  >
        <h6 className='fw-bold themeColor'>WHAT WE SERVE</h6>
        <h2>Your Favorite Food <br /> at Your Door</h2>
        <div className="row mt-4">

            <div className="col-md-4 text-center p-2">
                <img className='w-100 img1' src={chef} alt="" />
                <h4 className='mt-4'>Fresh & Healthy</h4>
                <p className='px-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, minus</p>
            </div>
           

            <div className="col-md-4 text-center p-2">
                <img className='w-100' src="https://thumbs.dreamstime.com/z/delivery-man-surgical-mask-semi-flat-rgb-color-vector-illustration-courier-riding-scooter-isolated-cartoon-character-white-188769721.jpg?w=768" alt="" />
                <h4 className='mt-4'>Free Delivery</h4>
                <p className='px-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, minus</p>
            </div>
           

            <div className="col-md-4 text-center p-2">
                <img className='w-100 img3' src="https://img.freepik.com/premium-vector/3d-chat-icon-typing-chat-icon_370567-2155.jpg?w=2000" alt="" />
                <h4 className='mt-4'>Customer Support</h4>
                <p className='px-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, minus</p>
            </div>
           


        </div>
    </DIV>
  )
}


const DIV = styled.div`

.img1{
    width: 160px !important;
    /* height: 150px; */
}
.img3{
    width: 180px !important;
    /* height: 150px; */
}
    
 img{
        width: 200px;
        height: 200px;
        mix-blend-mode: multiply;
    } 
`