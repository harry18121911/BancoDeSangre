import axios from 'axios'
const urlBasica = import.meta.env.VITE_API_URL
const API = axios.create({baseURL:urlBasica});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('token')){
        req.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return req;
})

export default API;