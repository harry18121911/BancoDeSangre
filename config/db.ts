const mongoose = require('mongoose')
const colors = require('colors')

const connectDB= async()=>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URL)
        console.log(colors.bgGreen(`Connected To Mongodb Database ${mongoose.connection.host}`));
    }catch(error){
        console.log(colors.bgRed.white(`Mongodb Database Error ${error}`));
    }
}

export default connectDB