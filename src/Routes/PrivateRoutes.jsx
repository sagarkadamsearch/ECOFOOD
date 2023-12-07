import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function PrivateRoutes({children}) {
    const isAuth = useSelector(store=>store.AuthReducer.isAuth)
  return (
    <div>
       {isAuth?children:<Navigate to="/login"/>}
    </div>
  )
}
