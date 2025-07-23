/*
TAKEN FROM DISCORD.JS DOCUMENTATION https://discordjs.guide/creating-your-bot/main-file.html#running-your-application
*/
// Built in packages for working with file system
const fs = require('node:fs');
const path = require('node:path');
const dotenv = require('dotenv');
// Named exports from discord.js
const { 
	Client, // The connection to Discords gateway
	Collection, // Used to store commands
	Events, // Enum of event names
	GatewayIntentBits, // Ability to define specific events we care about
	MessageFlags // bitfield constants here we only need Ephemeral
} = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] }); // Create a new bot that only listens to slash commands
// Get our discord token
dotenv.config();
const token = process.env.DISCORD_TOKEN;
// Prepare Command registry
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);
// Dynamically load command files from file path
for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}
// Handle slash events
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return; // Ensures is a command

	const command = interaction.client.commands.get(interaction.commandName); // See if command matches one we have registered

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	// Execute command and await response
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
		}
	}
});

// Fires once post login confirms bot is online
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});
// Log in to Discord with your client's token
client.login(token);