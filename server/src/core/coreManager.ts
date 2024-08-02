
import admin from "firebase-admin"
import { getMessaging } from "firebase-admin/messaging"
import serviceAccount from "@src/configs/serviceKey.json"




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
            credential: admin.credential.cert(serviceAccount),
        });


    }

    public initServer() {
        this.initFCM()
    }

}