
import admin from "firebase-admin"
import { getMessaging } from "firebase-admin/messaging"
import serviceAccount from "@src/configs/serviceKey.json"
import { cert, ServiceAccount } from "firebase-admin/app"



const serviceAccountVar = serviceAccount as ServiceAccount
export class CoreManager {

    private static instance: any


    private constructor() {

    }

    public static getInstance(): CoreManager {
        if (!CoreManager.instance) {
            CoreManager.instance = new CoreManager()

        }
        return CoreManager.instance
    }

    public initFCM() {
        admin.initializeApp({
            credential: cert(serviceAccountVar)
        });


    }

    public initServer() {
        this.initFCM()
    }

}