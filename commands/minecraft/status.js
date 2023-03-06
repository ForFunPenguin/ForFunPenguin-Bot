const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const util = require('minecraft-server-util');
const options = {
    timeout: 5000, 
    enableSRV: true,
    protocolVersion: 47
};
const server_ip_default = "forfunpenguin.ddns.net";
const server_port = 25565; 

module.exports = {
	data: new SlashCommandBuilder()
		.setName('status')
		.setDescription('查看Minecraft伺服器狀態')
        .addStringOption(option => option.setName('伺服器ip')
            .setDescription('想要查看的伺服器IP')
            .addChoices(
            { name: 'forfunpenguin.ddns.net', value: 'forfunpenguin.ddns.net' },
            { name: 'mc.hypixel.net', value: 'mc.hypixel.net' },
            { name: 'play.manacube.com', value: 'play.manacube.com' },
            { name: 'play.wynncraft.com', value: 'play.wynncraft.com' },
        )),
    async execute(interaction) {
        const server_ip = (() => {
            if (interaction.options.getString("伺服器ip")) return interaction.options.getString("伺服器ip")
            else return server_ip_default;
        })();
        let status = "offline";
        const msg = await interaction.reply({ content: `Pinging ${server_ip}....`, fetchReply: true , ephemeral: true});
        await util.status(server_ip, server_port, options)
            .then((response) => {
                status = "online";
                console.log(response);
                const embed = new EmbedBuilder()
                .setTitle("Minecraft伺服器狀態")
                .setDescription(`這將顯示有關Minecraft伺服器的狀態和訊息. \n\n **伺服器狀態:** :green_circle:  \n **伺服器IP:** ${server_ip} \n **伺服器通訊埠:** ${server_port}`)
                .setColor(3447003)
                .addFields(
                    {name:"伺服器版本", value: `${response.version.name}`},
                    {name:"伺服器協定版本", value:`${response.version.protocol}`},
                    {name:"線上人數", value:`${response.players.online}`},
                    {name:"最大人數", value:`${response.players.max}`},
                    {name:"MOTD (可能顯示不正確)", value:`${response.motd.clean}`},
                    {name:"延遲", value:`${response.roundTripLatency}`})
                .setTimestamp();
                interaction.followUp({embeds: [embed], ephemeral: true})
                //interaction.reply({content: `${response.motd.clean}`, ephemeral: true});
        })
        .catch ((error) => {
            console.log(error);
        })
        console.log(status)
        if (status == "offline") {
            const embed = new EmbedBuilder()
            .setTitle("Minecraft伺服器狀態")
            .setDescription(`這將顯示有關Minecraft伺服器的狀態和訊息. \n\n **伺服器狀態:** :red_circle:  \n **伺服器IP:** ${server_ip} \n **伺服器通訊埠:** ${server_port}`)
            .setColor(3447003)
            .setTimestamp();
            interaction.followUp({embeds: [embed], ephemeral: true})
        }
    }
}
