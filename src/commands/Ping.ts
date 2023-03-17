import { SlashCommandBuilder, ChannelType, TextChannel, EmbedBuilder } from "discord.js"
import { SlashCommand } from "../type";

const command : SlashCommand = {
    command: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Faire un ping pong !")
    ,
    execute: interaction => {
        interaction.reply({
            content: "Pong " + interaction.user.username + " !"
        }).catch((err) => {
            console.log('Une erreur est survenue : ' + err);
        });
    },
    cooldown: 10
}

export default command