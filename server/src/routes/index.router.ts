import express from "express";
import { helloworldRouter } from "./helloworld.route";
import { mqttRouter } from "./mqtt.route";
import { fcmRouter } from "./fcm.route";

const router = express.Router();

router.use("/", helloworldRouter);
router.use("/mqtt", mqttRouter)
router.use("/fcm", fcmRouter)
export { router };