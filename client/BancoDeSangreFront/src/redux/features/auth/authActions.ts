import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-hot-toast";

export const userLogin = createAsyncThunk(
    'auth/login',
    async(user:{role:string, email:string,password:string,} )=>{
        try {
            const {data} = await API.post('/auth/login',user)
            if(data.success){
                localStorage.setItem('token',data.token)
                toast.success(data.message)
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


