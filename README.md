# DiscordJsDemo
Intended to create a demo exercise for in class presentation 

# Setup
1. Clone the repository
2. Create your own branch with `git checkout -b your-branch-name`
3. Run `npm install` to install dependencies
4. Create a `.env` file in the root directory with the following content:
    ```
    DISCORD_TOKEN=your_token_here
    PUBLIC_KEY=your_public_key_here
    CLIENT_ID=your_client_id_here
    GUILD_ID=your_guild_id_here
    ```
    The previous information can be obtained from the Discord channel.

6. Create your own command, to do so open the `commands/utility/` folder and create a new file for your command, `your_command_name.js`. Then, implement the command logic in that file following the code structure below:
```javascript
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('your_command_name')
        .setDescription('Description of your command'),
    async execute(interaction) {
        await interaction.reply('Response from your command');
    },
};
```
5. Make sure to replace `your_command_name` and the description with your actual command name( command name should be in lowercase and no spaces) and description. Make sure to also replace the response in the `interaction.reply` method with what you want your command to respond with.

6. After creating your command, register it with the Discord API. You can do this by running a script that registers all commands in the `commands` directory. This is usually done in a separate file, `deploy-commands.js`. Just run the script with `node deploy-commands.js`. This will register your new command with Discord.


7. Run the bot using `node index.js`


# Features
- Responds to `!ping` command with `Pong!`