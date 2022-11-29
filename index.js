const { Client, GatewayIntentBits, ActivityType, Collection } = require('discord.js');
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences
  ] 
});
const { token } = require('./config.json');
const fs = require("fs");
const path = require("path");

client.commands = new Collection();

["command"].forEach(handler => {
  require(`./handler/${handler}`)(client);
});

client.on('ready', () => {
  console.log(`Hi, ${client.user.username} is now online!`);

  client.user.setPresence({
    activities: [{ name: `/help | 頻道指令`, type: ActivityType.Playing }],
    status: 'online',
  });
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  if (client.user.presence.status === "dnd") {
    if (!interaction.member.roles.cache.find(x => x.name === "▬▬ 👑 Owner ▬▬⠀") && !interaction.member.roles.cache.find(x => x.name === "▬▬ 🏹 Admin ▬▬⠀")) {
      interaction.reply({ content: '機器人目前處於更新狀態, 指令目前無法使用!', ephemeral: true });
      return;
    }
  }

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: '執行指令時發生未知錯誤!', ephemeral: true });
  }
});

client.login(token);
