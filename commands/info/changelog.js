const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('changelog')
		.setDescription('查看機器人更新日誌'),
	async execute(interaction) {
		interaction.reply({content: `${interaction.member} \nhttps://docs.google.com/document/d/139YfJTJQJ_WhwdP2wpOX8lwSPaLchcq0PFjy60UvOD8/edit?usp=sharing`, ephemeral: true})
	},
};