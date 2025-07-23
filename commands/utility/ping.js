const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder() // Building the command
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) { // Defining the response
		await interaction.reply('Pong!');
	},
};