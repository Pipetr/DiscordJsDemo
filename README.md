# DiscordJsDemo
A simple Discord bot built with Discord.js that responds to commands and allows you to create your own commands easily.

# Setup
1. Clone the repository
2. Create your own branch with `git checkout -b your-branch-name`
3. Run `npm install` to install dependencies
4. After installing the dependencies, you will need to set up your Discord bot. Follow these steps:
    1. Open the Discord developer portal and log into your account. [Discord Developer Portal](https://discord.com/developers/applications)
    2. Click on the "New Application" button.
    3. Enter a name and confirm the pop-up window by clicking the "Create" button.
    4. To create an invite link, head back to the My Apps page under the "Applications" section, click on your bot application, and open the OAuth2 page.
    5. In the sidebar, you'll find the OAuth2 URL generator. Select the bot and applications.commands options. Once you select the bot option, a list of permissions will appear, allowing you to configure the permissions your bot needs.
    6. Grab the link via the "Copy" button and enter it in your browser. You should see something like this (with your bot's username and avatar):
    7. Choose the server you want to add it to and click "Authorize". Do note that you'll need the "Manage Server" permission on a server to add your bot there. This should then present you a nice confirmation message

    Congratulations! You've successfully added your bot to your Discord server. 

5. Create a `.env` file in the root directory with the following content:
CLIENT_ID = Application ID general info
PUBLIC_KEY = Public key general info
GUILD_ID = right click desired discord server on web browser
DISCORD_TOKEN = generated under bot tab
    
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
        // Your command logic here
        // For example, replying with a message
        await interaction.reply('This is your command response!');
    },
};
```
5. Make sure to replace `your_command_name` and the description with your actual command name( command name should be in lowercase and no spaces) and description. Make sure to also replace the response in the `interaction.reply` method with what you want your command to respond with.

6. After creating your command, register it with the Discord API. You can do this by running a script that registers all commands in the `commands` directory. This is usually done in a separate file, `deploy-commands.js`. Just run the script with `node deploy-commands.js`. This will register your new command with Discord.


7. Run the bot using `node index.js`


# Features
- Responds to `/ping` command with `Pong!`
- Allows you to create your own commands by following the structure provided above
- Commands are registered with Discord API for easy access
- Supports interaction with users through slash commands


# Usage
- Invite the bot to your server using the generated invite link.
- Use the `/ping` command to test the bot's response.
- Create your own commands by following the provided structure and registering them with the Discord API.

# Requirements
- Node.js (v16.9.0 or higher)
- Discord.js (v14.0.0 or higher)
- A Discord account to create and manage the bot

# Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Open a pull request

# Acknowledgements
- This project is inspired by the Discord.js documentation and examples.
- Thanks to the Discord.js.
- Special thanks to the contributors who have helped improve this project.
[NibrasKhalid](https://github.com/NibrasKhalid), [RyanPatton8](https://github.com/RyanPatton8), [Pipetr](https://github.com/Pipetr), [Wadih-Roy](https://github.com/Wadih-Roy)

