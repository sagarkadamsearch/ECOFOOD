import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import {FaFilter} from 'react-icons/fa'
import {useSearchParams} from "react-router-dom"

export default function DishesCard({name}) {

    const [searchParams,setSearchParams] = useSearchParams();
    const [category,setCategory] = useState(searchParams.getAll("category") || [])

    const handleCategory = ()=>{
        const value={name}.name;
        let newCategory = [...category];
    
        if(newCategory.includes(value)){
          newCategory = newCategory.filter((el)=>el!==value)
        }else{
          newCategory.push(value)
        }
        setCategory(newCategory)
    
      }
    
      useEffect(()=>{
        let params={
          category,
        }
        setSearchParams(params)
      },[category])
    

  return (
<DIV >

    <div className='shadow rounded ' activeclassName="active" onClick={handleCategory}>
   <FaFilter className="bomb fs-2"/>
    <h6>{name}</h6>
    </div>
</DIV>
  )
}





const DIV = styled.div`

div{

    width: 90px;
    height: 100px;
    margin: 10px;
    display: grid;
    place-items: center;
    background-color:white ;
    /* background-color:#DC3545 ; */
}
div:hover{
    background-color:#DC3545 ;
    color: white;
}


     .bomb{
        background-color: #DC3545;
        color: white;
        border-radius: 50%;
        padding: 5px;
    }
    div:hover .bomb{
        background-color: white;
        color: #DC3545;
        border-radius: 50%;
        padding: 5px;
    }

    .active{
      background-color: white;
        color: #DC3545;
        border-radius: 50%;
        padding: 5px;
    }
`