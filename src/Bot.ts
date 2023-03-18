import { Client, GatewayIntentBits } from "discord.js";
import registerEvents from "./handlers/Events"
import registerCommands from "./handlers/Commands";
import SQL from "./sql/SQL";
import dotenv from "dotenv";
import cache from "./cache/CacheSystem";

dotenv.config();



// use only if you use SQL

/* generate SQL tables
const database = new SQL();
database.generateTables();
*/


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.AutoModerationExecution,
        GatewayIntentBits.AutoModerationConfiguration,
    ]
});


registerEvents(client);
registerCommands(client);


client.login(process.env.TOKEN);