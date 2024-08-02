import { sendToMultipleViaTopic } from "@utils/fcm/sendToMultipleDevice.utils";
import { Request, Response } from "express";




export const sendToMultipleDeviceController = async (req: Request, res: Response) => {
    const topic = "testing"
    const result = await sendToMultipleViaTopic(req.body, topic)
    res.send(result)
}