import express, {Request, Response} from 'express';
export const testController = (req: Request, res: Response) =>{
    res.status(200).send({
        message: "Welcome User",
        success: true
    })
}
