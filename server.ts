import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './config/db';
import testRoutes from './routes/testRoutes';
import authRoutes from './routes/authRoutes';
import inventoryRoutes from './routes/inventoryRoutes';
import analyticsRoutes from './routes/analyticsRoutes';
import adminRoutes from './routes/adminRoutes';
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
//inventory routes
app.use('/api/v1/inventory',inventoryRoutes);

app.use('/api/v1/analytics',analyticsRoutes);
//htpp://localhost:8080/test
app.use('/api/v1/admin', adminRoutes)
//port

const PORT = process.env.PORT 

//listen

app.listen(PORT, () => {
    console.log(colors.bgBlue(`Node server running in ${process.env.DEV_MODE} on Port ${process.env.PORT}`))
})
