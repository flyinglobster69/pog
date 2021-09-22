module.exports = {
    checkUser: function(receivedMessage) {
    const {MessageEmbed, Client} = require('discord.js')
    const client = new Client
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command

    // let guild = client.guilds.fetch('serverID');
    // let member = guild.member(receivedMessage.author);
    // let nickname = member ? member.displayName : null;
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog user'
            case 'user' :
                const embed = new MessageEmbed()
                .setTitle('Discord Profile')
                .setDescription(`Your username: ${receivedMessage.author.username}\nYour Discord Tag: ${receivedMessage.member.user.tag}\nYour ID: ${receivedMessage.author.id}\nPing pong: <@!${receivedMessage.author.id}>`) 
                .setThumbnail(receivedMessage.author.avatarURL())
                .setColor('#00ADEF')
                receivedMessage.channel.send(embed) // sends user information (username and uid)
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}