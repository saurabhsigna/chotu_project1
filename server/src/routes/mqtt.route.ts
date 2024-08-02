import { sendMessageToTestingTopicController } from "@src/controllers/mqtt/testingTopic.controller";
import { Router } from "express";

const mqttRouter = Router()



mqttRouter.post("/publish/testing", sendMessageToTestingTopicController)



export {mqttRouter}