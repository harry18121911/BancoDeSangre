import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import API from '../../services/API';
import { getCurrentUser} from '../../redux/features/auth/authActions'
import {Navigate} from 'react-router-dom'
import { AppDispatch } from '../../redux/store';

type ContainerProps = {
  children: React.ReactNode; //👈 children prop typr
};

const ProtectedRoute = (props:ContainerProps) => {
  const dispatch:AppDispatch = useDispatch()

  //get current user
  const getUser= async ()=>{
    try {
      const {data} = await API.get('/auth/current-user')
      if(data?.success){
        dispatch(getCurrentUser())
      }
    } catch (error) {
      localStorage.clear()
      console.log(error)
    }
  }

  useEffect(()=>{
    getUser();
  });
  if(localStorage.getItem('token')){
    return props.children
  }else{
    return <Navigate to={'/login'}/>
  }

}

export default ProtectedRoute
