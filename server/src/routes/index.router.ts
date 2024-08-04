import express from "express";
import { helloworldRouter } from "./helloworld.route";
import { mqttRouter } from "./mqtt.route";
import { fcmRouter } from "./fcm.route";
// import { googleAuthRouter } from "./oauth.google.route";

const router = express.Router();

router.use("/", helloworldRouter);
router.use("/mqtt", mqttRouter)
router.use("/fcm", fcmRouter)
// router.use("/oauth/google", googleAuthRouter)
export { router };

