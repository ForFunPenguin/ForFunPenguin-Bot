const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('skyblock')
		.setDescription('下載目前遊玩Hypixel Skyblock所使用的模組'),
	async execute(interaction) {
		interaction.reply({content: `${interaction.member} \nhttps://drive.google.com/file/d/1ABdUrveLU1g__3d3qRo6d4vx3WtPIZ7R/view?usp=sharing`, ephemeral: true});
	},
};