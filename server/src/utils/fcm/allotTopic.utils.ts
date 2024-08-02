import { fcmConfig } from "@configs/fcmConfig";
import { getMessaging } from "firebase-admin/messaging";



export const allotTopic = async (topicName: string) => {

    let userTokenArr: string[] = []
    fcmConfig.fcmDevices.map(userData => {
        if (userData.topic == "testing") {
            userTokenArr.push(userData.token)
        }
    })


    getMessaging().subscribeToTopic(userTokenArr, topicName)
        .then((response) => {
            // See the MessagingTopicManagementResponse reference documentation
            // for the contents of response.
            console.log('Successfully subscribed to topic:', response);
        })
        .catch((error) => {
            console.log('Error subscribing to topic:', error);
        });
}