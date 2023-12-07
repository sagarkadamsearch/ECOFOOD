import React from 'react'
import Button from '@mui/material/Button';
import styled from '@emotion/styled';


export default function ButtonComponent({name,onClick}) {
  return (
    <DIV>
  <Button className='button m-2' onClick={onClick} variant="contained">{name}</Button>
     </DIV>
  )
}


const DIV = styled.div`
  Button{
    background-color: #DC3545;
    color: #f4f4f4;
    font-weight: bold;
    border: 1.5px solid #DC3545;
    border-radius: 0%;
  }
  Button:hover{
    background-color:#f4f4f4 ;
    color: #DC3545;
    font-weight: bold;
    
  }
`