import { fcmConfig } from "@configs/fcmConfig";
import { uniqueNameGenerator } from "@utils/uniqueNameGenerator";
import { tokenToString } from "typescript";
import { getAccessToken } from "./accessToken.utils";
import { allotTopic } from "./allotTopic.utils";

export const storeFCMToken = async (bodyData: any) => {
    const { fcm_token, userId, topic, init } = bodyData;
    if (!fcm_token) return { type: "error", message: "no token found" }
    let isDevicePresent = false;
    fcmConfig.fcmDevices.map((data) => {
        if (data.id == userId) {
            console.log("isdevicepresent is true");

            isDevicePresent = true
            data.token = fcm_token
        }
        // console.log(data, userId);

    })



    // const isTokenPresent = fcmConfig.fcmTokens.some((token) => token == fcm_token);
    if (!isDevicePresent) {
        const uniqueId = uniqueNameGenerator()
        const newDevice = { id: uniqueId, token: fcm_token, topic: "testing" }
        fcmConfig.fcmDevices.push(newDevice)
        await allotTopic("testing")
        return newDevice
    }

}
