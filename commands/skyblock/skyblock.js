const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('skyblock')
        .setDescription('Hypixel Skyblock指令')
        .addSubcommand(subcommand =>
		subcommand
			.setName('rain')
			.setDescription("查看Spider's Den 下雨狀態")),
	async execute(interaction) {
        if (interaction.options.getSubcommand() == 'rain') {
            function secsToTime(num) {
                var hours = Math.floor(num / 3600);
                var minutes = Math.floor((num - (hours * 3600)) / 60);
                var seconds = num - (hours * 3600) - (minutes * 60);
                if (hours < 10) { hours = "0" + hours; }
                if (minutes < 10) { minutes = "0" + minutes; }
                if (seconds < 10) { seconds = "0" + seconds; }
                return hours + ':' + minutes + ':' + seconds;
            }
            const UTCPrevThunderstorm = 1668474356000;
            const UTCNow = new Date().getTime();
            const base = Math.floor((UTCNow - UTCPrevThunderstorm) / 1000);
            const thunderstorm = base % ((3850 + 1000) * 4);
            const rain = thunderstorm % (3850 + 1000);
            let { timeLeft, rainNow, nextRain, thunderstormNow, nextThunderstorm, DTCRain, DTCThunderstorm } = "";
            timeLeft = "00:00:00";
            if (rain <= 3850) {
                rainNow = "否";
                nextRain = secsToTime(3850 - rain);
                DTCRain = Math.floor(UTCNow / 1000) + (3850 - rain);
            } else {
                rainNow = "是";
                timeLeft = secsToTime(3850 + 1000 - rain);
                nextRain = secsToTime(3850 + 1000 - rain + 3850);
                DTCRain = Math.floor(UTCNow / 1000) + (3850 + 1000 - rain + 3850);
            }
            if (thunderstorm < (3850 * 4 + 1000 * 3)) {
                thunderstormNow = "否";
                nextThunderstorm = secsToTime(3850 * 4 + 1000 * 3 - thunderstorm);
                DTCThunderstorm = Math.floor(UTCNow / 1000) + (3850 * 4 + 1000 * 3 - thunderstorm);
            } else {
                thunderstormNow = "是";
                timeLeft = secsToTime(3850 * 4 + 1000 * 4 - thunderstorm);
                nextThunderstorm = secsToTime(3850 * 4 + 1000 * 4 - thunderstorm + 3850 * 4 + 1000 * 3);
                DTCThunderstorm = Math.floor(UTCNow / 1000) + (3850 * 4 + 1000 * 4 - thunderstorm + 3850 * 4 + 1000 * 3);
            }
            interaction.reply({content: "正在下雨? " + rainNow + "\n正在雷雨? " + thunderstormNow + "\n剩餘時間: " + timeLeft + "\n距離下次下雨: "  + " <t:" + DTCRain + ":R>" + "\n距離下次雷雨: "  + " <t:" + DTCThunderstorm + ":R>", ephemeral: true});
        } else {
            interaction.reply({content: `執行指令時發生未知錯誤!`, ephemeral: true});
        }

    },
};