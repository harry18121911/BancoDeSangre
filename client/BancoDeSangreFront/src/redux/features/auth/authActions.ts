import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
    'auth/login',
    async(user:{role:string, email:string,password:string, } )=>{
        try {
            const {data} = await API.post('/auth/login',user)
            if(data.success){
                localStorage.setItem('token',data.token)
                toast.success(data.message)
            }
        } catch (error) {
            if (error instanceof Error) {
              console.log(`${error.name}:${error.message}`); // Typescript is happy !
            } else {
              return new Error(`Unexpected error : ${error}`)
            }
          }
        }
)