const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

//目前擁有的顏色 
//Aqua, Black, Blue, Gold, Gray,
//Green, LightBlue, Lime, Magenta, MediumPurple
//Orange, Pink, Purple, Skyblue, Yellow

module.exports = {
	data: new SlashCommandBuilder()
		.setName('color')
		.setDescription('更改名稱顏色')
        //.addStringOption(option =>
          //  option.setName('清除顏色')
            //    .setDescription('清除目前名稱所顯示的顏色'))
        .addStringOption(option =>
            option.setName('顏色')
			    .setDescription('想要更改的顏色')
			    .setRequired(true)
			    .addChoices(
                    { name: 'Aqua', value: 'Aqua' },
                    { name: 'Black', value: 'Black' },
                    { name: 'Blue', value: 'Blue' },
                    { name: 'Gold', value: 'Gold' },
                    { name: 'Gray', value: 'Gray' },
                    { name: 'Green', value: 'Green' },
                    { name: 'LightBlue', value: 'LightBlue' },
                    { name: 'Lime', value: 'Lime' },
                    { name: 'Magenta', value: 'Magenta' },
                    { name: 'MediumPurple', value: 'MediumPurple' },
                    { name: 'Orange', value: 'Orange' },
                    { name: 'Pink', value: 'Pink' },
                    { name: 'Purple', value: 'Purple' },
                    { name: 'Skyblue', value: 'Skyblue' },
                    { name: 'Yellow', value: 'Yellow' },
			    )),
            

    async execute(interaction) {
        function resetcolor() {
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
        }
        
        if (interaction.member.roles.cache.find(x => x.name === "▬▬ 💎 MVP ▬▬⠀") || (interaction.member.roles.cache.find(x => x.name === "▬▬ ⭐ MVP+ ▬▬⠀")) || (interaction.member.roles.cache.find(x => x.name === "▬▬ 🌟 MVP++ ▬▬⠀"))) {
            //擁有MVP以上
            const color = interaction.options.getString('顏色')
            if (color === 'Aqua') {
                resetcolor();
                interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === "Aqua"));
                interaction.reply({content: `成功將名稱顏色更改為 ${color}`, ephemeral: true});
            } else if (color === 'Black') {
                resetcolor();
                interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === "Black"));
                interaction.reply({content: `成功將名稱顏色更改為 ${color}`, ephemeral: true});
            } else if (color === 'Blue') {
                resetcolor();
                interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === "Blue"));
                interaction.reply({content: `成功將名稱顏色更改為 ${color}`, ephemeral: true});
            } else if (color === 'Gold') {
                resetcolor();
                interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === "Gold"));
                interaction.reply({content: `成功將名稱顏色更改為 ${color}`, ephemeral: true});
            } else if (color === 'Gray') {
                resetcolor();
                interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === "Gray"));
                interaction.reply({content: `成功將名稱顏色更改為 ${color}`, ephemeral: true});
            } else if (color === 'Green') {
                resetcolor();
                interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === "Green"));
                interaction.reply({content: `成功將名稱顏色更改為 ${color}`, ephemeral: true});
            } else if (color === 'LightBlue') {
                resetcolor();
                interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === "LightBlue"));
                interaction.reply({content: `成功將名稱顏色更改為 ${color}`, ephemeral: true});
            } else if (color === 'Lime') {
                resetcolor();
                interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === "Lime"));
                interaction.reply({content: `成功將名稱顏色更改為 ${color}`, ephemeral: true});
            } else if (color === 'Magenta') {
                resetcolor();
                interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === "Magenta"));
                interaction.reply({content: `成功將名稱顏色更改為 ${color}`, ephemeral: true});
            } else if (color === 'MediumPurple') {
                resetcolor();
                interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === "MediumPurple"));
                interaction.reply({content: `成功將名稱顏色更改為 ${color}`, ephemeral: true});
            } else if (color === 'Orange') {
                resetcolor();
                interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === "Orange"));
                interaction.reply({content: `成功將名稱顏色更改為 ${color}`, ephemeral: true});
            } else if (color === 'Pink') {
                resetcolor();
                interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === "Pink"));
                interaction.reply({content: `成功將名稱顏色更改為 ${color}`, ephemeral: true});
            } else if (color === 'Purple') {
                resetcolor();
                interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === "Purple"));
                interaction.reply({content: `成功將名稱顏色更改為 ${color}`, ephemeral: true});
            } else if (color === 'Skyblue') {
                resetcolor();
                interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === "Skyblue"));
                interaction.reply({content: `成功將名稱顏色更改為 ${color}`, ephemeral: true});
            } else if (color === 'Yellow') {
                resetcolor();
                interaction.member.roles.add(interaction.guild.roles.cache.find(r => r.name === "Yellow"));
                interaction.reply({content: `成功將名稱顏色更改為 ${color}`, ephemeral: true});
            }
        } else {
            interaction.reply({content: "此功能需達到 MVP 以上才可使用.", ephemeral: true});
        }
    }

}