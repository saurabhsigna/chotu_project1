import { sendToMultipleViaTopic } from "@utils/fcm/sendToMultipleDevice.utils";
import { Request, Response } from "express";




export const sendToMultipleDeviceController = async (req: Request, res: Response) => {
    const topic = "testing"
    const result = await sendToMultipleViaTopic(topic)
    res.send(result)
}