import { sendToSingleDevice } from "@utils/fcm/sendToSingleDevice.utils";
import { Request, Response } from "express";



export const sendToSingleDeviceController = async (req: Request, res: Response) => {

    const result = await sendToSingleDevice(req.body)
    res.send(result)
}