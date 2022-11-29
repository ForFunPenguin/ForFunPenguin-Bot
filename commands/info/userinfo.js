const { SlashCommandBuilder } = require('@discordjs/builders');
const { stripIndents } = require("common-tags");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Returns user information')
    .addUserOption(option => option.setName('目標').setDescription('想要查看的目標名稱')),
  async execute(interaction) {
    const member = (() => {
      if (interaction.options.getMember("目標"))
        return interaction.options.getMember("目標")
      else
        return interaction.member;
    })();
    const joined = Intl.DateTimeFormat('zh-TW').format(member.joinedTimestamp);
    const roles = member.roles.cache.map(r => r).join(',\n').replace('@everyone', ' ') || 'None'
    const created = Intl.DateTimeFormat('zh-TW').format(member.user.createdAt);
    const embed = new EmbedBuilder()
      .setFooter({ text: member.displayName, iconURL: member.user.displayAvatarURL()})
      .setThumbnail(member.user.displayAvatarURL())
      .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
      .addFields({ name: '成員資訊:', value: stripIndents`
        **顯示名稱:** ${member.displayName} 
        **加入於:** ${joined}
        **身分組:** \n${roles}`, inline: true })
      .addFields({ name: '用戶資訊:', value: stripIndents`
        **ID:** ${member.user.id}
        **用戶名稱**: ${member.user.username}
        **Tag**: ${member.user.tag}
        **建立於**: ${created}`, inline: true })
      .setTimestamp();
    if (member.presence != null) {
      if (member.presence.activities[0]) embed.addFields({ name:'目前正在玩', value: stripIndents`**名稱:** ${member.presence.activities[0].name}` });
    }
    interaction.reply({embeds: [embed], ephemeral: true})
  },
};