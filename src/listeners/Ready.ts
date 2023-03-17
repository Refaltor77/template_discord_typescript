import { Client } from "discord.js";
import { BotEvent } from "../type";

const event : BotEvent = {
    name: "ready",
    once: true,
    execute: (client : Client) => {
        console.log(
           `Logged in as ${client.user?.tag}`
        )

        const serverCount = client.guilds.cache.size;
        client.user?.setPresence({
            status: 'online',
            activities: [{
                name: `${serverCount} serveurs`,
            }],
        });
    },
}

export default event;