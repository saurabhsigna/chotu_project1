import mqtt from "mqtt/*";
import { esp32SubHandler } from "./sub/testing.esp32.sub";
import { esp32PubHandler } from "./pub/testing.esp32.pub";
import { ultrasonicTriggerSubHandler } from "./sub/getUltrasonicTrigger.sub";
import { notificationStatusSubHandler } from "./sub/getNotificationStatus.sub";

export class MqttManager {
    private static instance: MqttManager

    private constructor() {

    }

    public static getInstance(): MqttManager {
        if (!MqttManager.instance) {
            MqttManager.instance = new MqttManager()
        }
        return MqttManager.instance;
    }


    public SubscribeTopic(client: mqtt.MqttClient, topic: string) {
        client.subscribe([topic], () => {
            console.log(`subscribe to topic '${topic}'`);

        })
    }

    public pubishMessage(client: mqtt.MqttClient, message: string, topic: string, callback: () => void) {
        client.publish(topic, message, { qos: 0, retain: false }, (error) => {
            if (error) {
                console.error(error)
            }
            callback()
        })
    }

    public subscriptionHandler(client: mqtt.MqttClient) {

        esp32SubHandler(client)
        ultrasonicTriggerSubHandler(client)
        notificationStatusSubHandler(client)

    }

    public publisherHandler(client: mqtt.MqttClient) {
        esp32PubHandler(client)
    }
}