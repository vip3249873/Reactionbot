module.exports = {
    name: 'react3',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '778402043332526110';
        const white = message.guild.roles.cache.find(role => role.name === "white");
        const pink = message.guild.roles.cache.find(role => role.name === "pink");
        const red = message.guild.roles.cache.find(role => role.name === "red");
        const brown = message.guild.roles.cache.find(role => role.name === "brown");
        const orange = message.guild.roles.cache.find(role => role.name === "orange");
        const yellow = message.guild.roles.cache.find(role => role.name === "yellow");
        const green = message.guild.roles.cache.find(role => role.name === "green");
        const blue = message.guild.roles.cache.find(role => role.name === "blue");
        const lavender = message.guild.roles.cache.find(role => role.name === "lavender");
        const black = message.guild.roles.cache.find(role => role.name === "black");
 
        const whiteheart = '🤍';
        const pinkheart = '💗';
        const redheart = '❤️';
        const brownheart = '🤎';
        const orangeheart = '🧡';
        const yellowheart = '💛';
        const greenheart = '💚';
        const blueheart = '💙';
        const lavenderheart = '💜';
        const blackheart = '🖤';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle(' Choose the color.')
            .setDescription('  Choosing a color for your nametag\n\n'
                + `${whiteheart}  788602615864623104\n`
                + `${pinkheart}  @pink. \n`
                + `${redheart}  @red \n`
                + `${brownheart}  @brown \n`
                + `${orangeheart}  @orange \n`
                + `${yellowheart}  @yellow \n`
                + `${greenheart}  @green \n`
                + `${blueheart}  @blue \n`
                + `${lavenderheart}  @lavender \n`
                + `${blackheart}  @black \n`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(whiteheart);
        messageEmbed.react(pinkheart);
        messageEmbed.react(redheart);
        messageEmbed.react(brownheart);
        messageEmbed.react(orangeheart);
        messageEmbed.react(yellowheart);
        messageEmbed.react(greenheart);
        messageEmbed.react(blueheart);
        messageEmbed.react(lavenderheart);
        messageEmbed.react(blackheart);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === whiteheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(white);
                }
                if (reaction.emoji.name === pinkheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pink);
                }
                if (reaction.emoji.name === redheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(red);
                }
                if (reaction.emoji.name === brownheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(brown);
                }
                if (reaction.emoji.name === orangeheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(orange);
                }
                if (reaction.emoji.name === yellowheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellow);
                }
                if (reaction.emoji.name === greenheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(green);
                }
                if (reaction.emoji.name === blueheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blue);
                }
                if (reaction.emoji.name === lavenderheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(lavender);
                }
                if (reaction.emoji.name === blackheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(black);
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
                if (reaction.emoji.name === whiteheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(white);
                }
                if (reaction.emoji.name === pinkheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pink);
                }
                if (reaction.emoji.name === redheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(red);
                }
                if (reaction.emoji.name === brownheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(brown);
                }
                if (reaction.emoji.name === orangeheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(orange);
                }
                if (reaction.emoji.name === yellowheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellow);
                }
                if (reaction.emoji.name === greenheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(green);
                }
                if (reaction.emoji.name === blueheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blue);
                }
                if (reaction.emoji.name === lavenderheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(lavender);
                }
                if (reaction.emoji.name === blackheart) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(black);
                }
            } else {
                return;
            }
        });
    }
 
}   