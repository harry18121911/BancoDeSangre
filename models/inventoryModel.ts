import mongoose, { Types } from "mongoose"

interface Inventory{
    inventoryType:string,
    bloodGroup:string,
    quantity:number,
    donorEmail:Types.ObjectId,
    organization: Types.ObjectId,
    hospital:Types.ObjectId,
    donor:Types.ObjectId
}
const inventorySchema = new mongoose.Schema<Inventory>({
    inventoryType:{
        type:String,
        required:[true,'inventory type required'],
        enum:['in','out']
    },
    bloodGroup: {
        type:String,
        required:[true, 'blood group is required'],
        enum:['O+', 'O-','AB+', 'AB-',"A+",'A-','B+','B-']
    },
    quantity:{
        type:Number,
        required:[true,'blood quantity is require']
    },
    donorEmail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
    required: [true, "Donor email is required"],
    }
    ,
    organization:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,'organization is required']
    },
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required: function(){
            return this.inventoryType === "out";
        }
    },
    donor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:function(){
        return this.inventoryType === "in";
        }
    }
})

export default mongoose.model("inventory", inventorySchema)
