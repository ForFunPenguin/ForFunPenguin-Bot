const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const { version } = require('../../config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('查看所有頻道指令'),
	async execute(interaction) {
		const exampleEmbed = new EmbedBuilder()
        .setColor(3447003)
        //.setAuthor(interaction.client.user.username, interaction.client.user.displayAvatarURL()) //interaction.member.user.username = 使用指令者 interaction.client = 機器人
        .setAuthor({ name: interaction.client.user.username, iconURL: interaction.client.user.displayAvatarURL() })
	    .setTitle('可使用指令')
	    .setDescription('此機器人還在開發中,未來將會提供更多功能.' + "\n\u200b")
        .addFields(
            { name: '身分組 Role', value: '`color` (需達到MVP以上階級才可使用)' + `\n\u200b` },
            { name: '頻道 Channel', value: '`rule`**, **`ping`**, **`uptime`**, **`changelog`**, **`userinfo`' + `\n\u200b`},
            { name: '模組包 Modpacks', value: '`modpacks`' + `\n\u200b`},
            { name: '空島生存 Skyblock', value: '`rain`' + `\n\u200b`},
        ) //inline: true 同行 ; value: `\n\u200b` or { name: '\u200B', value: '\u200B' } 換行
        .setTimestamp()
        .setFooter({ text: '目前機器人版本 Ver ' + version });

        interaction.reply({embeds: [exampleEmbed], ephemeral: true})
    },
};