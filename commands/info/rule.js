const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rule')
		.setDescription('查看頻道規則'),
	async execute(interaction) {
		const exampleEmbed = {
            color: 3447003,
            author: {
                name: interaction.client.user.username,
                icon_url: interaction.client.user.displayAvatarURL(),
            },
            fields: [
                {
                    name: ':warning: **頻道規則**',
                    value: '\n\u200b⠀' + '\n\u200b1 » 禁用;;stop ;;leave (機器人使用者不受限制), 若不想聽請將機器人音量拉至0或靜音.' + '\n\u200b2 » 請勿短時間內進出頻道數次, 違者 Ban 1 天無法連接語音頻道.' + '\n\u200b3 » 本頻道有自架機器人,階級越高可使用的指令越多,輸入/help 查看更多指令.' + '\n\u200b4 » 若使用機器人時遇到BUG,請將問題提交至錯誤回報或是直接進語音頻道找管理員.' + '\n\u200b5 » 身分組只給予至等級50,身分組等級上限依據為所有人的平均等級.',
                },
            ],
            timestamp: new Date(),
        };

        interaction.reply({embeds: [exampleEmbed], ephemeral: true})
    },
};