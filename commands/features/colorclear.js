const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('colorclear')
		.setDescription('清除目前名稱所顯示的顏色'),

    async execute(interaction) {
        if (interaction.member.roles.cache.find(x => x.name === "▬▬ 💎 MVP ▬▬⠀") || (interaction.member.roles.cache.find(x => x.name === "▬▬ ⭐ MVP+ ▬▬⠀")) || (interaction.member.roles.cache.find(x => x.name === "▬▬ 🌟 MVP++ ▬▬⠀"))) {
            if (interaction.member.roles.cache.find(x => x.name === "Aqua")) interaction.member.roles.remove(interaction.guild.roles.cache.find(x => x.name === "Aqua"));
            else if (interaction.member.roles.cache.find(x => x.name === "Black")) interaction.member.roles.remove(interaction.guild.roles.cache.find(x => x.name === "Black"));
            else if (interaction.member.roles.cache.find(x => x.name === "Blue")) interaction.member.roles.remove(interaction.guild.roles.cache.find(x => x.name === "Blue"));
            else if (interaction.member.roles.cache.find(x => x.name === "Gold")) interaction.member.roles.remove(interaction.guild.roles.cache.find(x => x.name === "Gold"));
            else if (interaction.member.roles.cache.find(x => x.name === "Gray")) interaction.member.roles.remove(interaction.guild.roles.cache.find(x => x.name === "Gray"));
            else if (interaction.member.roles.cache.find(x => x.name === "Green")) interaction.member.roles.remove(interaction.guild.roles.cache.find(x => x.name === "Green"));
            else if (interaction.member.roles.cache.find(x => x.name === "LightBlue")) interaction.member.roles.remove(interaction.guild.roles.cache.find(x => x.name === "LightBlue"));
            else if (interaction.member.roles.cache.find(x => x.name === "Lime")) interaction.member.roles.remove(interaction.guild.roles.cache.find(x => x.name === "Lime"));
            else if (interaction.member.roles.cache.find(x => x.name === "Magenta")) interaction.member.roles.remove(interaction.guild.roles.cache.find(x => x.name === "Magenta"));
            else if (interaction.member.roles.cache.find(x => x.name === "MediumPurple")) interaction.member.roles.remove(interaction.guild.roles.cache.find(x => x.name === "MediumPurple"));
            else if (interaction.member.roles.cache.find(x => x.name === "Orange")) interaction.member.roles.remove(interaction.guild.roles.cache.find(x => x.name === "Orange"));
            else if (interaction.member.roles.cache.find(x => x.name === "Pink")) interaction.member.roles.remove(interaction.guild.roles.cache.find(x => x.name === "Pink"));
            else if (interaction.member.roles.cache.find(x => x.name === "Purple")) interaction.member.roles.remove(interaction.guild.roles.cache.find(x => x.name === "Purple"));
            else if (interaction.member.roles.cache.find(x => x.name === "Skyblue")) interaction.member.roles.remove(interaction.guild.roles.cache.find(x => x.name === "Skyblue"));
            else if (interaction.member.roles.cache.find(x => x.name === "Yellow")) interaction.member.roles.remove(interaction.guild.roles.cache.find(x => x.name === "Yellow"));
            else return;
            interaction.reply({content: '成功清除名稱顏色', ephemeral: true});
        }
    }
}