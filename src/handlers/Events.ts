import { Client } from "discord.js";
const fs = require("fs");
const path = require("path");
import { BotEvent } from "../type";

export default (client: Client) => {
    let eventsDir = path.join(__dirname, "../listeners")

    fs.readdirSync(eventsDir).forEach((file: string) => {
        if (!file.endsWith(".ts")) return;
        let event: BotEvent = require(`${eventsDir}/${file}`).default
        event.once ?
            client.once(event.name, (...args) => event.execute(...args))
            :
            client.on(event.name, (...args) => event.execute(...args))
        console.log(`🌠 Successfully loaded event ${event.name}`)
    })
}