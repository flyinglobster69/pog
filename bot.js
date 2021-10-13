// pog#2538 (PogChamp; pog bot)
// 1.0: June 03 2021
// Author: FlyingLobster69 (LooOOooL YT)

// Import the discord.js module
const {Client, MessageEmbed} = require('discord.js')
const fs = require('fs')
const { exitCode } = require('process')
// const schedule = require('node-schedule')

// Create an instance of Discord that we will use to control the bot
const config = require('./config.json')

// Connect singles
const e = require('./singles/e.json')
const help = require('./singles/help.json')
const sixnine = require('./singles/69.json')
const paimon = require('./singles/paimon.json')
const dewitjson = require('./singles/dewit.json')
const ehetendandayo = require('./singles/ehe.json')
const butterjson = require('./singles/butter.json')
const sus = require('./singles/sus.json')
const dad = require('./singles/dad.json')
const swear = require('./singles/swears.json')

// Math commands
const add = require('./commands/add')
const subtract = require('./commands/subtract')
const multiply = require('./commands/multiply')
const divide = require('./commands/divide')
const power = require('./commands/power')
const root = require('./commands/root')

// Connect commands
const pog = require('./commands/pog')
const poggies = require('./commands/poggies')
const poggers = require('./commands/poggers')
const start = require('./commands/start')
const helpcmd = require('./commands/help')
const test = require('./commands/test')
const user = require('./commands/user')
const ping = require('./commands/ping')
const code = require('./commands/code')
const version = require('./commands/version')
const readme = require('./commands/readme')
const horny = require('./commands/horny')
const biden = require('./commands/biden')
const trump = require('./commands/trump')
const pirate = require('./commands/pirate')
const windows = require('./commands/windows')
const exe = require('./commands/exe')
const buff = require('./commands/buff')
const butter = require('./commands/butter')
const american = require('./commands/american')
const count = require('./commands/count')
const ecount = require('./commands/ecount')
const wish = require('./commands/wish')
const sm = require('./commands/sm')
const smol = require('./commands/smol')
const upload = require('./commands/upload')
const isearthround = require('./commands/isearthround')
const die = require('./commands/die')
const invite = require('./commands/invite')
// const music = require('./commands/music')

// Connect client
const client = new Client()

// Gets called when our bot is successfully logged in and connected
client.on('ready', () => {
    console.log("Eyy " + client.user.tag + " is now online!")

    client.user.setActivity("pog help") // Activity status on Discord
})

client.on('message', receivedMessage => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return // kekw
    }
    
    if (receivedMessage.content.toLowerCase().startsWith(config.prefix)) { // If first 3 letters = 'pog', process receivedMessage function
        processCommand(receivedMessage)
    }

    if (receivedMessage.content.toLowerCase() == e.e) { // e
        receivedMessage.channel.send(e.e)
        var uid = "ecount" + parseInt(receivedMessage.author.id).toString() + ".txt" // takes the message author uid and puts it into the file name

                fs.open('./ecount/' + uid, 'r+', function(error, fd) { // opens the user's e count file
                    if (error) { // if user has no pog count file, create one
                        fs.writeFile('./ecount/' + uid, "1", "utf8", function(error, data) { // start user with 1 e
                            null
                        })
                    }
                    else { // if user has a pog count file
                        fs.readFile('./ecount/' + uid, "utf8", function(error, data) { // read the value in the e count file
                            if (error) { // if file does not exist, create one (this is unlikely to be needed)
                                fs.writeFile('./ecount/' + uid, "1", "utf8", function(error, data) { // start user with 1 e
                                    null
                                })
                            }
                            else { // log e
                                let ecount = data // initialize e count variable and assign it to data from fs.readFile()
                                var eint = parseInt(ecount) // convert e count to an int variable
                                var etotal = eint + 1 // add 1 to the e count
                                var etotalstring = etotal.toString() // convert new e count back to string value
                                fs.write(fd, etotalstring, 0, "utf8", function(error, writtenbytes) { // overwrite the old e count value with the new one
                                })
                            }
                        })
                    }
                })
    }
    if (receivedMessage.content.toLowerCase() == help.help) { // help
        receivedMessage.channel.send(help.reply)
    }
    if (receivedMessage.content.includes(sixnine.input)) { // 69
        receivedMessage.channel.send(sixnine.reply)
    }
    if (receivedMessage.content.toLowerCase().includes(paimon.paimon)) { // paimon 
        receivedMessage.channel.send(paimon.reply)
    }
    if (receivedMessage.content.toLowerCase() == dewitjson.dewit) { // dewit
        const embed = new MessageEmbed()
        .setImage('https://media.discordapp.net/attachments/852751760324821042/863226637460963364/dewit.gif')
        .setColor('#00ADEF')
        receivedMessage.channel.send(embed)
    }
    if (receivedMessage.content.toLowerCase() == dewitjson.kekw) { // kekw
        receivedMessage.channel.send(dewitjson.emote)
    }
    if (receivedMessage.content.toLowerCase() == ehetendandayo.ehe) { // ehe
        const embed = new MessageEmbed()
        .setTitle(ehetendandayo.output)
        .setThumbnail('https://cdn.discordapp.com/attachments/852751760324821042/863226283961876510/ehe.gif')
        .setColor('#00ADEF')
        receivedMessage.channel.send(embed)
    }
    if (receivedMessage.content.toLowerCase().includes(butterjson.butter)) { // butter
        receivedMessage.channel.send(butterjson.reply)
    }
    if (receivedMessage.content.toLowerCase().includes(sus.sus) || receivedMessage.content.toLowerCase().includes(sus.amogus)) { // sus
        receivedMessage.channel.send(susGen())
    }
    if (receivedMessage.content.toLowerCase().startsWith(dad.im)) { // dad
        var name = receivedMessage.content.substr(3)
        receivedMessage.channel.send(dad.hi + name + dad.dad)
    }
    if (receivedMessage.content.toLowerCase().includes(swear.fucc) || receivedMessage.content.toLowerCase().includes(swear.retard)) { // F
        receivedMessage.channel.send(`Uh oh someone said a no-no word :P   ˢᵘˢˢʸ ᵇᵃᵏᵃ ${susGen()}`)
    }
})

// Command function
function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after "pog" is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    // Basic Commands
    if (pog.checkPog(receivedMessage)) { // pog
        return
    }
    else if (poggies.checkPoggies(receivedMessage)) { // poggies
        return
    }
    else if (poggers.checkPoggers(receivedMessage)) { // poggers
        return
    }
    else if (start.checkStart(receivedMessage)) { // pog start
        return
    }
    else if (helpcmd.checkHelp(receivedMessage)) { // pog help
        return
    }
    else if (test.checkTest(receivedMessage)) { // pog test
        return
    }
    else if (user.checkUser(receivedMessage)) { // pog user
		return
	}
    else if (ping.checkPing(receivedMessage)) { // pog ping
        return
    }
    else if (code.checkCode(receivedMessage)) { // pog code
        return
    }
    else if (version.checkVersion(receivedMessage)) { // pog version
        return
    }
    else if (readme.checkReadme(receivedMessage)) { // pog readme
        return
    }
    else if (horny.checkHorny(receivedMessage)) { // pog horny
        return
    }
    else if (biden.checkBiden(receivedMessage)) { // pog biden
        return 
    }
    else if (trump.checkTrump(receivedMessage)) { // pog trump
        return
    }
    else if (pirate.checkPirate(receivedMessage)) { // pog pirate
        return
    }
    // else if (windows.checkWindows(receivedMessage)) { // pog windows
    //     return
    // }
    else if (exe.checkExe(receivedMessage)) { // pog exe
        return
    }
    else if (buff.checkBuff(receivedMessage)) { // pog buff
        return
    }
    else if (butter.checkButter(receivedMessage)) { // pog butter
        return
    }
    else if (american.checkAmerican(receivedMessage)) { // pog american
        return
    }
    else if (count.checkCount(receivedMessage)) { // pog count
        return
    }
    else if (ecount.checkEcount(receivedMessage)) { // pog ecount
        return
    }
    else if (wish.checkWish(receivedMessage)) { // pog wish
        return
    }
    else if (sm.checkStellarMoments(receivedMessage)) { // pog sm
        return
    }
    else if (smol.checkSmol(receivedMessage)) { // pog smol
        return
    }
    else if (upload.checkUpload(receivedMessage)) { // pog upload
        return
    }
    else if (isearthround.checkIsearthround(receivedMessage)) { // pog isearthround
        return
    }
    else if (die.checkDie(receivedMessage)) { // pog die
        return
    }
    else if (invite.checkInvite(receivedMessage)) { // pog invite
        return
    }
    // else if (music.checkMusic(receivedMessage)) { // pog music
    //     return
    // }

    // else if (receivedMessage == "time") {
    //     const date = new Date(2021, 5, 25, 17, 51, 0);
    //     const job = schedule.scheduleJob(date, function(){
    //         console.log('time test message owowoowowowowowowowowowo')
    //         receivedMessage.channel.send('time test message owowoowowowowowowowowowo')
    //     })
    //     console.log(job)
    // }
    
    // Math
    if (add.checkAdd(receivedMessage)) { // pog add
        return
    }
    else if (subtract.checkSubtract(receivedMessage)) { // pog subtract
        return
    }
    else if (multiply.checkMultiply(receivedMessage)) { // pog multiply
        return
    }
    else if (divide.checkDivide(receivedMessage)) { // pog divide
        return
    }
    else if (power.checkPower(receivedMessage)) { // pog power
        return
    }
    else if (root.checkRoot(receivedMessage)) { // pog root
        return
    }
    // If command doesn't exist
    else {
        return null // do nothing lmao
    }
}

// Deleted Message quoting system
var randomPity // create pity variable
randomPity = 0 // initialize pity system
client.on('messageDelete', receivedMessage => { // called whenever a message is deleted

    const random = Math.floor(Math.random() * 10) // generate a random number
    randomPity += 1

    if (randomPity > 9) { // if pity reaches 10, quote deleted message and reset pity counter
        receivedMessage.channel.send(`\"${receivedMessage.content}\" - ${receivedMessage.author.username}`)
        randomPity = 0
    }
    if (random == 5) { // if random number (luck) is 5, quote delete message and reset pity count (10% luck)
        randomPity = 0
        receivedMessage.channel.send(`\"${receivedMessage.content}\" - ${receivedMessage.author.username}`)
    }
})

// Random 'sus' text selector
function susGen() {
    var susList = ["ඞ", "ඞු්ි", "ඩ", "ඹ", "ඩිුා"]
    return susList[Math.floor(Math.random() * susList.length)]
}

client.login(config.token)