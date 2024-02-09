import React from 'react'
import { Navigate } from 'react-router-dom'

type ContainerProps = {
    children: React.ReactNode; //👈 children prop typr
  };

const PublicRoute = (props:ContainerProps) => {
  if(localStorage.getItem('token')){
    return (
        <Navigate to={'/'}/>
      )
    }else{
        return props.children
    }
    
}

export default PublicRoute