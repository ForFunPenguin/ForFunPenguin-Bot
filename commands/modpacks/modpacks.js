const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('modpacks')
		.setDescription('下載模組包')
        .addStringOption(option =>
            option.setName('模組包名稱')
			    .setDescription('想要下載的模組包')
			    .setRequired(true)
			    .addChoices(
                    { name: 'Skyblock', value: 'Skyblock' },
                    { name: 'Wynncraft', value: 'Wynncraft' },
			    )),
    async execute(interaction) {
        const packName = interaction.options.getString('模組包名稱')
        if (packName == "Skyblock") {
            interaction.reply({content: `${interaction.member} \nhttps://drive.google.com/file/d/1ABdUrveLU1g__3d3qRo6d4vx3WtPIZ7R/view?usp=sharing`, ephemeral: true});
        } else if (packName == "Wynncraft") {
            interaction.reply({content: `${interaction.member} \nhttps://drive.google.com/file/d/1oODYAD2ZIPNgc9ZB6rwBIZG0VaG1Tlte/view?usp=sharing`, ephemeral: true})
        } else {
            interaction.reply({content: `無法找到該模組包!`, ephemeral: true});
        }

    }
}
