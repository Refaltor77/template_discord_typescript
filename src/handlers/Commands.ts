import {Client, Collection, Routes, SlashCommandBuilder} from "discord.js";
import { REST } from "@discordjs/rest"
import { readdirSync } from "fs";
import { join } from "path";
import { Command, SlashCommand } from "../type";

export default (client : Client) => {
    const slashCommands : SlashCommandBuilder[] = []

    let slashCommandsDir = join(__dirname,"../commands")

    client.slashCommands = new Collection();
    readdirSync(slashCommandsDir).forEach(file => {
        if (!file.endsWith(".ts")) return;
        let command : SlashCommand = require(`${slashCommandsDir}/${file}`).default;
        slashCommands.push(command.command);
        client.slashCommands.set(command.command.name, command);
    })

    const rest = new REST({version: "10"}).setToken(process.env.TOKEN);

    rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
        body: slashCommands.map(command => command.toJSON())
    })
        .then((data : any) => {
            console.log(`🔥 Successfully loaded ${data.length} slash command(s)`)
        }).catch(e => {
        console.log(e)
    })
}