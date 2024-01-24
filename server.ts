import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db';
import testRoutes from './routes/testRoutes';
import authRoutes from './routes/authRoutes';
//dot config
dotenv.config()
//mongodb connection

connectDB();
//rest object

const app = express();

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//routes
//test route
app.use('/api/v1/test',testRoutes);
//auth route
app.use('/api/v1/auth',authRoutes);

//htpp://localhost:8080/test

//port

const PORT = process.env.PORT 

//listen

app.listen(PORT, () => {
    console.log(colors.bgBlue(`Node server running in ${process.env.DEV_MODE} on Port ${process.env.PORT}`))
})
