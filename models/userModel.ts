import mongoose from "mongoose"

interface User{
    role :string,
    name: string,
    organizationName: string,
    hospitalName:string,
    email:string,
    password:string,
    address:string,
    phone:string,
}

const userSchema = new mongoose.Schema<User>({
    role:{
        type:String,
        required:[true,"Role is required"],
        enum:["admin","organization","donor","hospital"]
    },
    name:{
        type:String,
        required:function(){
        
            if(this.role === "user" || this.role === "admin"){
                return true
        }
        return false}
    },
    organizationName:{
        type:String,
        required: function(){
            if(this.role === "organization"){
                return true
            }
            return false
        }
    },
    hospitalName:{
        type:String,
        required: function(){
            if(this.role === "hospital"){
                return true
            }
            return false
        }
    },
    email:{
        type:String,
        require:[true, "Email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true, "Password is required"]
    },
    address:{
        type:String,
        required:[true,"Address is required"]
    },
    phone:{
        type:String,
        required:[true, "Phone number is required"]
    },
}, {timestamps:true})

export default mongoose.model("users", userSchema)
