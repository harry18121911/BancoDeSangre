import jwt, { JwtPayload } from 'jsonwebtoken';
import express, {Request, Response,NextFunction} from 'express';

export const authMiddleware = async(req: Request, res: Response, next: NextFunction)=>{
    try {
        const token = (req.headers['authorization'] as string).split(" ")[1];
        jwt.verify (token, process.env.JWT_SECRET as string,(err, decode)  =>{
            if(err){
                return res.status(401).send({
                    success:false,
                    message:"Auth Failed"
                })
            }else{
                req.body.userId = (<any>decode).userId 
                next();
            }

        })

        }catch (error) {
            console.log(error)
            return res.status(401).send({
                success:false,
                error,
                message:'Auth Failed'
        })
    }
}