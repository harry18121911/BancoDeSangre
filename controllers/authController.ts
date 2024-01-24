import express, {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import userModel from '../models/userModel';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
export const registerController = async(req:Request, res:Response) =>{
    try {
        const existingUser = await userModel.findOne({email:req.body.email})
        //validation
        if(existingUser){
            return res.status(200).send({
                success:false,
                message:"User already exists"
            })
        }
        //hass password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword
        //rest data
        const user = new userModel(req.body)
        await user.save()
        return res.status(201).send({
            success: true,
            message: "User Registered Successfully",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error in Register API",
            error
        })
    }
};

export const loginController = async(req:Request, res:Response) =>{
    try {
        const user = await userModel.findOne({email:req.body.email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:"User email not found in database",
            })
        }
        //compara password
        const comparePassword = await bcrypt.compare(req.body.password, user.password)
        if(!comparePassword){
            return res.status(500).send({
                success:false,
                message:'Invalid Password'
            })
        }
        const token = jwt.sign({userId:user._id}, process.env.JWT_SECRET as string,{expiresIn: '1d'})
        return res.status(200).send({
            success:true,
            message:"Login Successfully",
            token,
            user
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Login API",
            error
        })
    }
};

