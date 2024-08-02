import { mqttConfig } from "@configs/mqttConfig";
import mqtt from "mqtt";
import fs from "fs"
import path from "path"
import { MqttManager } from "@utils/mqtt/MQTTManager";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;

const client = mqtt.connect(mqttConfig.connectUrl, {
    clientId,

    username: mqttConfig.username,
    password: mqttConfig.password,
    protocol: "mqtts",
    // rejectUnauthorized: true,

    ca: fs.readFileSync("../server/files/MQTT_CA.crt")
})


const initializeMQTT = () => {



    client.on('connect', () => {
        console.log('Connected')


    })
    client.on("message", (topic, payload) => {
        // console.log('Received Message:', topic, payload.toString())

    })


    MqttManager.getInstance().subscriptionHandler(client)

    client.on('error', (error) => {
        console.error('connection failed', error)
    })
}



export { client, initializeMQTT }