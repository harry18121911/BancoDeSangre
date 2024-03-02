import  { Request, Response } from 'express';
import userModel from '../models/userModel';

//GET DONOR LIST
export const getDonorsListController = async (req:Request,res:Response)=>{
  try {
    const donorData = await userModel.find({role:'donor'}).sort({createdAt: -1})
    return res.status(200).send({
      success:true,
      message:'Donor data fetched successfully',
      TotalCount: donorData.length, 
      donorData
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      success:false,
      errorMessage: "Error in donor list API"
    })
  }
}

//GET DONOR LIST  

export const getHospitalsListController = async (req:Request,res:Response)=>{
  try {
    const HospitalData = await userModel.find({role:'hospital'}).sort({createdAt: -1})
    return res.status(200).send({
      success:true,
      message:'Hospital data fetched successfully',
      TotalCount: HospitalData.length, 
      HospitalData
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      success:false,
      errorMessage: "Error in hospital list API"
    })
  }
}

export const getOrganizationsListController = async (req:Request,res:Response)=>{
  try {
    const organizationsData= await userModel.find({role:'organization'}).sort({createdAt: -1})
    return res.status(200).send({
      success:true,
      message:'Organization data fetched successfully',
      TotalCount: organizationsData.length, 
      organizationsData
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      success:false,
      errorMessage: "Error in organizations list API"
    })
  }
}

//DELETE CONTROLLERS

export const deleteDonorController =async (req:Request, res:Response)=>{
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success:true,
      message:"Donor deleted successfully"
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      success:false,
      message:"Error while deleting donor"
    })
  }
}

 

