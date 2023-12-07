import React from 'react'

import styled from '@emotion/styled'
import {FaCartPlus} from 'react-icons/fa'
import { BiUserCircle } from 'react-icons/bi'

export default function ReviewCard({title,message}) {
  return (
    
   <DIV>


    <div className='shadow rounded text-center p-3'>
      <BiUserCircle className='text-center d-block mx-auto fs-1'/>
        <h4 className=' '>{title}</h4>
        <p className=''>{message}</p>

      
    </div>
   </DIV>

    
  )
}


const DIV = styled.div`



.shadow{
  width: 250px;
  height: fit-content;
  margin: 20px ;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.3s;
}

.shadow:hover{
  transform:scale(1.1);
}

`