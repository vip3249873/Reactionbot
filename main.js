const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const prefix = '?';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Bot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length). split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
    if(command === 'react2'){
        client.commands.get('react2').execute(message, args, Discord, client);
    }
    if(command === 'react3'){
        client.commands.get('react3').execute(message, args, Discord, client);
    }
}  );



client.login(process.env.token);