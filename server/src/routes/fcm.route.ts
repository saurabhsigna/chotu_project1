

import { sendToMultipleDeviceController } from "@src/controllers/fcm/sendToMultiple.controller";
import { sendToSingleDeviceController } from "@src/controllers/fcm/sendToSingle.controller";
import { fetchStoredTokenController, storeTokenController } from "@src/controllers/fcm/storeToken.controller";
import { Router } from "express";

const fcmRouter = Router()



fcmRouter.post("/store", storeTokenController)
fcmRouter.post("/sendToSingle", sendToSingleDeviceController)
fcmRouter.post("/sendviatopic", sendToMultipleDeviceController)
fcmRouter.get("/store", fetchStoredTokenController)

export { fcmRouter }