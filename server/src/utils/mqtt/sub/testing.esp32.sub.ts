import { sendToMultipleViaTopic } from "@utils/fcm/sendToMultipleDevice.utils";
import { sendToSingleDeviceViaId } from "@utils/fcm/sendToSingleDevice.utils";
import mqtt from "mqtt/*";
const DEBOUNCE_TIME = 9999;
let lastLogTime = 0;
const esp32SubHandler = (client: mqtt.MqttClient) => {
    const topic = "/nodejs/testing/esp32"
    client.subscribe([topic], (err) => {

        console.log('sub come to :' + topic);

        if (err) {
            console.log('there has some error');

        }
    })
    client.on('message', (receivedTopic, message) => {
        if (receivedTopic === topic) {
            const currentTime = Date.now()

            if (currentTime - lastLogTime > DEBOUNCE_TIME) {
                lastLogTime = currentTime
                console.log(`Message received on ${receivedTopic}: ${message.toString()}`);
                sendToMultipleViaTopic("testing")
            }
            // Handle the message

            // Process the message as needed
            const payload = message.toString();
            // Add your message processing logic here
        }
    });
}


export { esp32SubHandler }