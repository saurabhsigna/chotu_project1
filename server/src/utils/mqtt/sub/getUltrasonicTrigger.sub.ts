import mqtt from "mqtt/*";



const ultrasonicTriggerSubHandler = (client: mqtt.MqttClient) => {
    const topic = "/ultrasonic_trigger"
    client.subscribe([topic], (err) => {

        if (err) {
            console.log("there is some error in getultrasonictrigger.sub.ts");

        }

    })

    client.on('message', (receivedTopic, message) => {
        if (receivedTopic === topic) {
            // Convert the message from a buffer to a string
            const messageContent = message.toString();
            console.log(`Received message on topic ${receivedTopic}: ${messageContent}`);
        }
    });
}


export { ultrasonicTriggerSubHandler }