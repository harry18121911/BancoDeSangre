import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from './authActions';


const initialState = {
    loading:false,
    user: {},
    token: {},
    error: {},
}

const authSlice= createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(userLogin.pending, (state)=>{
            state.loading = true;
            state.error = Error ;
        })
        builder.addCase(userLogin.fulfilled, (state, payload)=>{
            state.loading = false;
            state.user = payload;
            state.token = payload;
            
        })
        builder.addCase(userLogin.rejected, (state, payload) =>{
            state.loading = false;
            state.error = payload;
            
        })
    },
});

export default authSlice;