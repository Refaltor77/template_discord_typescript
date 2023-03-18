import { Client } from "discord.js";
import { BotEvent } from "../type";
import SQL from "../sql/SQL";

const event : BotEvent = {
    name: "ready",
    once: true,
    execute: (client : Client) => {
        let database = new SQL();
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

        client.guilds.cache.forEach((guild) => {
            database.createGuild(guild.id, guild.name);
        })
    },
}

export default event;