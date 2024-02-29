import  { Request, Response } from 'express';
import inventoryModel from '../models/inventoryModel';
import mongoose from 'mongoose';
//GET BLOOD DATA

export const bloodGroupDetailsController = async (req: Request, res: Response) => {
  try {
    const bloodGroups = ['O+', 'O-', 'AB+', 'AB-', "A+", 'A-', 'B+', 'B-']
    const bloodGroupData: { bloodGroup: string; totalIn: any; totalOut: any; availableBlood: number; }[] = [] 
    const organization = new mongoose.Types.ObjectId(req.body.userId) 
    //get single blood group
    await Promise.all(bloodGroups.map(async (bloodGroup) => {
      //count total in
      const totalIn = await inventoryModel.aggregate([
        {
          $match: {
            bloodGroup: bloodGroup,
            inventoryType: 'in',
            organization
          }
        },
        {
          $group: {
            _id: null,
            total: { $sum: '$quantity' }
          }
        }

      ])
      const totalOut = await inventoryModel.aggregate([
        {
          $match: {
            bloodGroup: bloodGroup,
            inventoryType: 'out',
            organization
          }
        },
        {
          $group: {
            _id: null,
            total: { $sum: '$quantity' }
          }
        }

      ])
      //CALCULATE TOTAL
      const availableBlood = (totalIn[0]?.total || 0) - (totalOut[0]?.total || 0)
      
      //PUSH DATA
      bloodGroupData.push({
        bloodGroup,
        totalIn: totalIn[0]?.total || 0,
        totalOut: totalOut[0]?.total || 0,
        availableBlood
      })
    }))
    return res.status(200).send({
      success:true,
      message: "Blood group Data Fetch Successfully",
      bloodGroupData
    })
  } catch (error) {
    console.log(error)
    return res.status(500).send({
      success: false,
      errorMessage: 'Error in Bloodgroup Data API',
      error
    })
  }
}

