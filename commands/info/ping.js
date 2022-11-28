const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('查看目前機器人延遲.'),
	async execute(interaction) {
		const msg = await interaction.reply({ content: '🏓 Pinging....', fetchReply: true , components: [row] });
        interaction.editReply(`🏓 Pong!\n延遲為 ${msg.createdTimestamp - interaction.createdTimestamp}毫秒`);
        setTimeout(() => {
            interaction.deleteReply().catch(error => {
                // Only log the error if it is not an Unknown Message error
                if (error.code !== 10000) {
                    console.error('此交互已被刪除:', error);
                }
            });
        }, 5000);
    },
};