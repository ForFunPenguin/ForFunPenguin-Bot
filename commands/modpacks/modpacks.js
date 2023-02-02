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
            interaction.reply({content: `${interaction.member} \nhttps://drive.google.com/file/d/1szXO0TveY43rdQJ2sHceBNN2XiaInjI7/view?usp=share_link`, ephemeral: true});
        } else if (packName == "Wynncraft") {
            interaction.reply({content: `${interaction.member} \nhttps://drive.google.com/file/d/1QeRCF1MCTIo5UE5-OtZDgBeUuhIPQMGD/view?usp=share_link`, ephemeral: true})
        } else {
            interaction.reply({content: `無法找到該模組包!`, ephemeral: true});
        }

    }
}
