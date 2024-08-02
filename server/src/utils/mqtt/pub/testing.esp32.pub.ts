import mqtt from "mqtt/*";


const esp32PubHandler = (client: mqtt.MqttClient) => {

    const topic = "/nodejs/testing/esp32"
    client.publish(topic, "dumdum", () => {
        console.log('message sent dumdum');

    })
    console.log('what');

}

export { esp32PubHandler }