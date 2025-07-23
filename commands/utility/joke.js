const oneLinerJoke = require('one-liner-joke');


const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('joke')
        .setDescription('Replies with a random joke!'),
    async execute(interaction) {
        // Get a random joke
        const joke = oneLinerJoke.getRandomJoke();
        // Reply with the joke
        if (!joke) {
            await interaction.reply('Sorry, I could not fetch a joke at the moment.');
            return;
        }
        await interaction.reply(joke.body);
    }
    
};