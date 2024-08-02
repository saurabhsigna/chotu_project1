import { fcmConfig } from "@configs/fcmConfig";
import { storeFCMToken } from "@utils/fcm/storeToken.utils";
import { Request, Response } from "express";





export const storeTokenController = async (req: Request, res: Response) => {
    const result = await storeFCMToken(req.body)
    res.send(result)
}



export const fetchStoredTokenController = async (req: Request, res: Response) => {
    res.send(fcmConfig.fcmDevices)
}