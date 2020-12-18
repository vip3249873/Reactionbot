module.exports = {
    name: 'react2',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '778402043332526110';
        const oworole = message.guild.roles.cache.find(role => role.name === "owo");
        const koyarole = message.guild.roles.cache.find(role => role.name === "koya");
        const peperole = message.guild.roles.cache.find(role => role.name === "pepe");
 
        const owoemoji = '😗';
        const koyaemoji = '🤖';
        const pepeemoji = '🐸';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle(' Choose the role u want.')
            .setDescription('  Choosing a role will let other members tag for bot quests!\n\n'
                + `${owoemoji} for OWO bot.\n`
                + `${koyaemoji} for Koya bot. \n`
                + `${pepeemoji} for pepe bot. \n`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(owoemoji);
        messageEmbed.react(koyaemoji);
        messageEmbed.react(pepeemoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === owoemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(oworole);
                }
                if (reaction.emoji.name === koyaemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(koyarole);
                }
                if (reaction.emoji.name === pepeemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(peperole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === owoemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(oworole);
                }
                if (reaction.emoji.name === koyaemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(koyarole);
                }
                if (reaction.emoji.name === pepeemoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(peperole);
                }
            } else {
                return;
            }
        });
    }
 
}   