import styled from '@emotion/styled'
import React from 'react'

export default function Loader() {
  return (
    <DIV>
<lord-icon
    src="https://cdn.lordicon.com/innjjrve.json"
    trigger="loop"
    delay="10"
    colors="primary:#3a3347,secondary:#b26836,tertiary:#646e78,quaternary:#ffc738,quinary:#2ca58d,senary:#f9c9c0,septenary:#f24c00,octonary:#ebe6ef"
   >
</lord-icon>
    </DIV>
  )
}

const DIV = styled.div`
height: 100vh;
width: 100%;
display: grid;
place-items:center;
    lord-icon{
        width: 250px;
        height:250px;
        /* margin-top: -100px; */
        position: fixed;
        top: 30%;
        left: 40%;
        /* translate: transform(-50%); */
    }

`