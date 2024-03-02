import { Request,Response ,NextFunction } from "express";
import userModel from "../models/userModel";

export const adminMiddleware = async(req:Request,res:Response,next:NextFunction)=>{
  try {
    const user = await userModel.findById(req.body.userId)
    //check admin
    if(user?.role !== 'admin'){
      return res.status(401).send({
        failure:true,
        errorMessage:'Auth Failed'
      });
    }else{
      next();
    }
  } catch (error) {
    return res.status(401).send({
      success:false,
      errorMessage: 'Auth Failed, ADMIN API'
    })
  }
}
