import mqtt from "mqtt/*";




const notificationStatusSubHandler = (client: mqtt.MqttClient) => {


    const topic = "/notification_toggle"

    client.subscribe([topic], (err) => {
        if (err) {
            console.log("there is some error in getnotificationStatus.sub.ts");

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


export { notificationStatusSubHandler }