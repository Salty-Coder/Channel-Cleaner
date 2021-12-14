const Discord = require('discord.js');
const bot = new Discord.Client();
//const colours = require('colours.json');

const token = 'token here';

var version = 'Version 3.5.5'



const PREFIX = 'cc!';

bot.on('ready', () =>{
    console.log('BOT SUCCESSFULLY STARTED');
    bot.user.setActivity('chat for cc!help', {type: 'WATCHING'}).catch(console.error)
})

bot.on('message', message=>{
    if(!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ")
    let command = args.shift()



    switch(command){


        case 'help':
            //message.reply('```The current commands available are: cc!pingme - pings you, cc!ping, replys with pong, cc!info version - replys with the current version, cc!info release - replys with the current Github release, cc!clean <amount> - cleans the specified amount of messages from that channel. If you need any help/you find a bug/you have a suggestion for the bot, please contact me on either Instagram or Discord (IG - @saltyspamzyt, DISC - SaltySpamz#7828)```')
            let helpEmbed = new Discord.MessageEmbed()
            .setColor("#23afcf")
            .setTitle("Channel Cleaner Help")
            .setThumbnail(bot.user.displayAvatarURL)
            .addField("***Testing: ***", 'cc!ping, cc!pingme', true)
            .addField("***Info: ***", 'cc!info version', true)
            .addField("***Message Management: ***", 'cc!clean <amount>', true)
            //.addField("***Role Count: ***", `${message.guild.roles.size}`, true)
            .addField('***Contact/Help: ***', 'https://salty-coder.weebly.com')
            .setFooter(`Channel Cleaner Help | Footer`, bot.user.displayAvatarURL);
            message.channel.send({embed: helpEmbed});
            break;

        case 'pingme':
            message.reply('pong!');
            console.log(message.member + ' USED \'cc!pingme\' PROMPT')
            break;

        case 'ping':
            message.channel.send('pong!');
            console.log(message.member + ' USED \'cc!ping\' PROMPT')
            break;

        case 'info':
            if(args[0] === 'version'){
                message.channel.send(version + '. ```In this 0. version - ' + addition0 + '. In this 1. version - ' + addition1 + '. In this 2. version - ' + addition2 + '```');
                console.log(message.member + ' USED \'cc!info version\' PROMPT')}
            break;


        case 'clean':
            //message.channel.send('Clean feature is currently disabled. Sorry for any inconvenience. The support server is in the website https://salty-coder.weebly.com')
            if(message.member.hasPermission('MANAGE_MESSAGES')){
                if(!args[0]) return message.reply('Please specify how many messages')
                else{
                    message.reply('Are you sure you want to delete ' + args[0] + ' messages? (Y/N)')
    
    
                    message.channel.awaitMessages(response => response.content === "Y" || response.content === "N", { max:1, time:30000 }).then(answers => {
                    if(answers.first().content === "Y") { 
                        message.channel.bulkDelete(args[0])
                        console.log('Successful deletion of ' + args[0] + ' messages');
                        message.reply('Successfully deleted ' + args[0] + ' messages!');
                    }
    
                    if(answers.first().content === "N") {
                        console.log('Successful cancellation of ' + args[0] + ' messages');
                        message.reply('The action has been cancelled!');
                          
                    }
                    })
                }
                    
                        
                
            
            
                    
            }else{
                message.reply('You must have the Manage Messages permission in order to use the clean prompt')
                console.log('Someone failed to use clean prompt due to permissions')}    
                break;       
                


                        


                    
            
                





            }

})


bot.login(process.env.token);