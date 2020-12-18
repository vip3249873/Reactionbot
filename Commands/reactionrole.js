module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '778402043332526110';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "GENSHIN");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "AMONG US");
 
        const yellowTeamEmoji = '☄️';
        const blueTeamEmoji = '💥';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('<:image0:768351105037369364>  Choose the role u want.')
            .setDescription('<:image0:768351105037369364>  Choosing a role will let other members tag you when they want to play!\n\n'
                + `${yellowTeamEmoji} for Genshin Impact <:paimon:780708780694437898> .\n`
                + `${blueTeamEmoji} for Among Us <:amongus:788510763282333746> `);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
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
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   