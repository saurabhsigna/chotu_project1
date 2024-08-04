


import admin from "firebase-admin"
import { getMessaging } from "firebase-admin/messaging"
import serviceAccount from "@src/configs/fcmKey.json"
import { fcmConfig } from "@configs/fcmConfig"





const sendToAll = () => {

}

export const sendToMultipleViaTopic = async (topic: string) => {
    // const { fcmToken, titleBody, msgBody, imgBody } = bodyData


    const imageUri =
        "https://media.graphassets.com/H850cSu4QQmV4jsfPFp6";
    // See documentation on defining a message payload.

    const message2 = {
        topic: "testing",

        notification: {
            title: "Alert!! someone is at the door",
            body:
                "in between 80cm to 110cm",
            image: imageUri,
        },

        webpush: {
            headers: {
                Urgency: "high",
            },
        },
    };
    if (fcmConfig.fcmDevices.length > 0) {

        getMessaging()
            .send(message2)
            .then((response) => {
                // Response is a message ID string.
                console.log("Successfully sent message:", response);
                return "done"
            })
            .catch((error) => {
                console.log("Error sending message:", error);
                return {
                    type: "error",
                    statusCode: 500,
                    message: error.message
                }
            });
    }
}