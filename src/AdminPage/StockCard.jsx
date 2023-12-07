import React from 'react'

export default function StockCard({data,text,bg,comp}) {
  return (
    <div className='shadow rounded d-flex justify-content-between align-items-center'  style={{width:"16%" , height:"100px",background:bg}}>
    <span className='ms-4 mt-2'>
        <h4 className='text-center text-white' >{data}</h4>
        <p className='text-center fw-bold text-white' >{text}</p>
    </span>
    <span className='me-4'>
   {comp}
    </span>
</div>
  )
}
