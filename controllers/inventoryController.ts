import express, {Request, Response} from 'express';
import userModel from '../models/userModel';
import inventoryModel from '../models/inventoryModel';

export const createInventoryController = async (req:Request, res:Response) =>{
    try {
        const {email, inventoryType}= req.body
        //validation
        const user = await userModel.findOne({email})
        if(!user){
            throw new Error('User Not Found')
        }
        if(inventoryType === "in" && user.role !== "donor"){
            throw new Error('Not a donor account')
        }
        if(inventoryType === "out" && user.role !== "hospital"){
            throw new Error('Not an hospital')
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
