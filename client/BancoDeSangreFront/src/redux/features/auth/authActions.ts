import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-hot-toast";
import { Request } from 'express';

export const userLogin = createAsyncThunk(
    'auth/login',
    async(user:{role:string, email:string,password:string,} )=>{
        try {
            const {data} = await API.post('/auth/login',user)
            if(data.success){
                localStorage.setItem('token',data.token)
                toast.success(data.message)
                window.location.replace('/')
            }
            return data;
        } catch (error) {
            if (error instanceof Error) {
              console.log(`${error.name}:${error.message}`); // Typescript is happy !
            } else {
              return new Error(`Unexpected error : ${error}`)
            }
          }
        }
)

//register
export const userRegister = createAsyncThunk(
  'auth/register', 
  async(user:{
      name?:string, 
      role?:string,
      email?:string, 
      password?:string, 
      phone?:string,
      organizationName?:string,
      hospitalName?:string,
      address?:string,
  })=>{
    try {
      const {data} = await API.post('/auth/register', user)
      if(data.success){
        toast.success("User registered successfully")
        window.location.replace('/login');
      }
      return data
    } catch (error) {
      console.log(error)
    }
  }
)

//current user
export const getCurrentUser= createAsyncThunk(
  'auth/getCurrentUser', 
  async(req:Request)=>{
    try {
      const {data} = await API.get('/auth/current-user',req)
      if(data){
        return data;
      }
    } catch (error) {
      console.log(error)
    }

  }
)
