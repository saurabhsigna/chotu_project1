import { client } from "@src/core/initMQTT";
import { MqttManager } from "@utils/mqtt/MQTTManager";
import { Request, Response } from "express";


export const sendMessageToTestingTopicController = (req: Request, res: Response) => {

    const message = req.body.message
    try {

        const callback = () => {
            console.log("subscribed to topic : esp32");

        }
        MqttManager.getInstance().pubishMessage(client, message || "sdkjlfa;", "/nodejs/testing/esp32", callback)
        res.send("sent")

    } catch (error: any) {
        res.send(error?.message)
    }
}
