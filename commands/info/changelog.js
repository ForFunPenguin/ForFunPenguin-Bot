const { SlashCommandBuilder } = require('@discordjs/builders');
const { link_changelog } = require('../../config.json')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('changelog')
		.setDescription('查看機器人更新日誌'),
	async execute(interaction) {
		interaction.reply({content: `${interaction.member} \n${link_changelog}`, ephemeral: true})
	},
};