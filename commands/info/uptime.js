const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uptime')
		.setDescription('查看機器人上線時間'),
	async execute(interaction) {
        let totalSeconds = (interaction.client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = Math.floor(totalSeconds % 60);
		let uptime = `機器人已經上線了 ${days}天 ${hours}小時 ${minutes}分鐘 ${seconds}秒.`;
        
		interaction.reply({content: `${uptime}`, ephemeral: true})
	},
};