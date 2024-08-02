require("dotenv").config()


const host = process.env.MQTT_HOST
// const host = "127.0.0.1"
const port = process.env.MQTT_PORT  
const connectUrl = `mqtt://${host}:${port}`

const username = process.env.MQTT_USERNAME
const password = process.env.MQTT_PASSWORD
console.log(connectUrl);


export const mqttConfig = {
    connectUrl,
    username,
    password
}