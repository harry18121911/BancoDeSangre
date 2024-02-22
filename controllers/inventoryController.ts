import  {Request, Response} from 'express';
import userModel from '../models/userModel';
import inventoryModel from '../models/inventoryModel';
import mongoose from 'mongoose';

export const createInventoryController = async (req:Request, res:Response) =>{
    try {
        const {email }= req.body
        //validation
        const user = await userModel.findOne({email})
        if(!user){
            throw new Error('User Not Found')
        }
        /*if(inventoryType === "in" && user.role !== "donor"){
            throw new Error('Not a donor account')
        }
        if(inventoryType === "out" && user.role !== "hospital"){
            throw new Error('Not an hospital')
        }*/
        if(req.body.inventoryType =='out'){
            const requestedBloodGroup = req.body.bloodGroup
            const requestedQuantityOfBlood = req.body.quantity
            const organization = new mongoose.Types.ObjectId(req.body.userId)
            //calculate Blood Quantity
            const totalInOfRequestedBlood = await inventoryModel.aggregate([
                {$match:{
                    organization,
                    inventoryType:'in',
                    bloodGroup:requestedBloodGroup
                }},{
                    $group:{
                        _id:'$bloodGroup',
                        total:{$sum:'$quantity'}
                    }
                }
            ])
            console.log('Total In', totalInOfRequestedBlood)
            const totalIn = totalInOfRequestedBlood[0]?.total || 0

            //calculate OUT blood quanitity
            
            const totalOutOfRequestedBlood = await inventoryModel.aggregate([
                {$match:{
                    organization,
                    inventoryType:'out',
                    bloodGroup:requestedBloodGroup
                }},
                {$group:{
                    _id:'$bloodGroup',
                    total: {$sum : '$quantity'}
                }}
            ])
            const totalOut = totalOutOfRequestedBlood[0]?.total || 0
            //in and out calculation
            const availableQuantityOfBlood = totalIn - totalOut
            //quantity validation
            if(availableQuantityOfBlood < requestedQuantityOfBlood){
                return res.status(202).send({
                    failed:true,
                    message:`Only ${availableQuantityOfBlood} ML of ${requestedBloodGroup.toUpperCase()} is available.`
                })
            }
            req.body.hospital = user?._id
        }else{
          req.body.donor = user?._id;

        }
        //save record
        const inventory = new inventoryModel(req.body)
        await inventory.save()
        return res.status(201).send({
            success:true,
            message:'New Blood Record Added'
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error in Create Inventory API',
            error
        })
    }
};

export const getInventoryController =async (req:Request, res:Response) =>{
    try {
        const inventory = await inventoryModel.find({organization:req.body.userId})
        .populate("donor")
        .populate("hospital")
        .sort({createdAt: -1})
        return res.status(200).send({
            success:true,
            message:"Get all records successfully",
            inventory
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error in Get All Inventory',
            error
        })

    }
}

//GET DONOR RECORDS
export const getDonorsController= async (req:Request,res:Response)=>{
  try {
    const organization = req.body.userId
    //find donors
    const donorId = await inventoryModel.distinct("donor",{
      organization
    });
    //console.log(donorId)
    const donors = await userModel.find({_id: donorId})
    return res.status(200).send({
      success:true,
      message: "Donor Record Successfully Fetched",
      donors
    })
  } catch (error) {
   console.log(error)
   return res.status(500).send({
      error,
      errorMessage:"Custom Error"

    })
  }
}
