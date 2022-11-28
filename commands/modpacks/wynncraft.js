const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wynncraft')
		.setDescription('下載目前遊玩Wynncraft所使用的模組'),
	async execute(interaction) {
		interaction.reply({content: `${interaction.member} \nhttps://drive.google.com/file/d/1oODYAD2ZIPNgc9ZB6rwBIZG0VaG1Tlte/view?usp=sharing`, ephemeral: true})
	},
};