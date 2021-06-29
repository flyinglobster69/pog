module.exports = {
    checkSubtract: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    var first = splitCommand.slice(1) // first number in arguments = first number
    var second = splitCommand.slice(2) // second number in arguments = second number
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog subtract'
            case 'subtract' :
                var difference = parseInt(first) - parseInt(second) // subtract second number from first number
                const embed = new MessageEmbed()
                .setTitle(difference)
                receivedMessage.channel.send(embed) // sends the difference to the chat
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}