const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const table = new ascii().setHeading("Command", "Load status");
const { token, guild_id, client_id } = require('../config.json');
const { REST, Routes } = require('discord.js');
const commands = [];

module.exports = (client) => {
	readdirSync("./commands/").forEach(dir => {
		const commandFiles = readdirSync(`./commands/${dir}`).filter(f => f.endsWith(".js"));
		for (let file of commandFiles) {
			let pull = require(`../commands/${dir}/${file}`);
			
            if ('data' in pull && 'execute' in pull) {
                commands.push(pull.data.toJSON());
                client.commands.set(pull.data.name, pull);
                table.addRow(file, 'DONE'); //✅
            } else {
                console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
                table.addRow(file, 'ERROR'); //❌
				continue;
            }
			
			if (pull.aliases && Array.isArray(pull))
				pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
		}
	});
	
	console.log(table.toString());

    const rest = new REST({
        version: "10"
      }).setToken(token);

    (async () => {
        try {
            console.log(`Started refreshing ${commands.length} application (/) commands.`);
    
            // The put method is used to fully refresh all commands in the guild with the current set
            const data = await rest.put(
                Routes.applicationGuildCommands(client_id, guild_id),
                { body: commands },
            );
    
            console.log(`Successfully reloaded ${data.length} application (/) commands.`);
        } catch (error) {
            // And of course, make sure you catch and log any errors!
            console.error(error);
        }
    })();
}