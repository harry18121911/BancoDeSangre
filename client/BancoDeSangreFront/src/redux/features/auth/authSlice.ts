import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, userLogin, userRegister } from './authActions';

const token = localStorage.getItem('token') ? localStorage.getItem('token'): {}

const error :string = "";

const initialState = {
    loading:false,
    user: {},
    token,
    error,
}

const authSlice= createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers(builder) {
        //login user
        builder.addCase(userLogin.pending, (state)=>{
            state.loading = true;
            state.error = "";
        })
        builder.addCase(userLogin.fulfilled, (state, payload)=>{
            state.loading = false;
            state.user = payload;  
            state.token = token;          
            
        })
        builder.addCase(userLogin.rejected, (state, ) =>{
            state.loading = false;
            state.error = "Rejected";
        });
    
        //register user
        builder.addCase(userRegister.pending, (state)=>{
            state.loading = true;
            state.error = "";
        })
        builder.addCase(userRegister.fulfilled, (state, payload)=>{
            state.loading = false;
            state.user = payload;  
            state.token = token;          
            
        })
        builder.addCase(userRegister.rejected, (state, ) =>{
            state.loading = false;
            state.error = "Rejected";
        });

        //current user
        builder.addCase(getCurrentUser.pending, (state)=>{
            state.loading = true;
            state.error = "";
        })
        builder.addCase(getCurrentUser.fulfilled, (state, payload)=>{
            state.loading = false;
            state.user = payload;  
            state.token = token;          
            
        })
        builder.addCase(getCurrentUser.rejected, (state, ) =>{
            state.loading = false;
            state.error = "Rejected";
        });
    },
});

export default authSlice;