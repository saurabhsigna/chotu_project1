


import admin from "firebase-admin"
import { getMessaging } from "firebase-admin/messaging"
import serviceAccount from "@src/configs/fcmKey.json"
import { fcmConfig } from "@configs/fcmConfig"





const sendToAll = () => {

}

export const sendToMultipleViaTopic = async (topic: string) => {
    // const { fcmToken, titleBody, msgBody, imgBody } = bodyData


    const imageUri =
        "https://fqowltqyxgtsruobvmis.supabase.co/storage/v1/object/sign/store/00016-2169749103.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdG9yZS8wMDAxNi0yMTY5NzQ5MTAzLnBuZyIsImlhdCI6MTY5MzAyOTYwNCwiZXhwIjoxNjkzNjM0NDA0fQ.bGf6uw0sRU7OhBzBHdwRaLO4QVAk_nBfNTHh23ruXGY&t=2023-08-26T06%3A00%3A04.424Z";
    // See documentation on defining a message payload.

    const message2 = {
        topic: "testing",

        notification: {
            title: "$FooCorp up 1.43% on the day",
            body:
                "$FooCorp nigga 11.80 points to close at 835.67, up 1.43% on the day.",
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