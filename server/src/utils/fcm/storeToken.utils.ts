import { fcmConfig } from "@configs/fcmConfig";
import { uniqueNameGenerator } from "@utils/uniqueNameGenerator";
import { tokenToString } from "typescript";

export const storeFCMToken = async (bodyData: any) => {
    const { fcm_token, userId, topic, init } = bodyData;
    if (!fcm_token) return { type: "error", message: "no token found" }

    const isDevicePresent = fcmConfig.fcmDevices.some((data) => {
        data.id = userId
    })

    // const isTokenPresent = fcmConfig.fcmTokens.some((token) => token == fcm_token);
    if (!isDevicePresent) {
        const uniqueId = uniqueNameGenerator()
        const newDevice = { id: uniqueId, token: fcm_token, topic }
        fcmConfig.fcmDevices.push(newDevice)
        return { message: newDevice }
    }

}
