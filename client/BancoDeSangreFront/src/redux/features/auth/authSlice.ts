import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, userLogin, userRegister } from './authActions';

const token = localStorage.getItem('token') ? localStorage.getItem('token'): {}

const error :string = "";
const name : string = "";
const role : string = "";
const hospitalName: string = "";
const organizationName: string= "";
const initialState = {
    loading:false,
    user:{},
    token,
    error,
    name,
    role,
    hospitalName,
    organizationName
}

const authSlice= createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        
    },
    extraReducers(builder) {
        //login user
        builder.addCase(userLogin.pending, (state)=>{
            state.loading = true;
            state.error = "";
        })
        builder.addCase(userLogin.fulfilled, (state, {payload})=>{
            state.loading = false;
            state.user = payload.user;  
            state.token = token;       
            
        })
        builder.addCase(userLogin.rejected, (state) =>{
            state.loading = false;
            state.error = "Rejected";
        });
    
        //register user
        builder.addCase(userRegister.pending, (state)=>{
            state.loading = true;
            state.error = "";
        })
        builder.addCase(userRegister.fulfilled, (state, {payload})=>{
            state.loading = false;
            state.user = payload.user;  
            state.token = token;  
       
            
        })
        builder.addCase(userRegister.rejected, (state, ) =>{
            state.loading = false;
            state.error = "Rejected R";
        });

        //current user
        builder.addCase(getCurrentUser.pending, (state)=>{
            state.loading = true;
            state.error = "";   
        })                                                /*Si resulta que {} hace toda la diferencia  */
        builder.addCase(getCurrentUser.fulfilled, (state, {payload})=>{
            state.loading = false;
            state.user = payload.user;  
            state.token = token;     
            state.name = payload.user.name;                      
            state.role = payload.user.role;
            state.hospitalName = payload.user.hospitalName;
            state.organizationName = payload.user.organizationName;
        })
        builder.addCase(getCurrentUser.rejected, (state, ) =>{
            state.loading = false;
            state.error = "Invalid credentials";
        });
    },
});

export default authSlice;
