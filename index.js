const discord = require("discord.js");
const client = new discord.Client();
const prefix = '!';
client.once('ready',()=>{
    console.log('bot is online');
    client.user.setActivity('Youtube',{type:'WATCHING'})
})
client.on("message",async message=>{
    if(message.channel.type==='dm'||message.author.bot)return ;
    const logChannel=client.channels.cache.find(channel=>channel.id==='#############')
    let words=["banana","orange"];
    let foundIntext=false;
    for(var i in words ){
        if(message.content.toLowerCase().includes(words[i].toLowerCase())) foundIntext=true;
    }
    if(foundIntext)
    {
        let logEmbed=new discord.MessageEmbed().setDescription(`<@${message.author.id}> Said a bad word`).addField('The message',message.content).addField('Channel',message.guild.channels.cache.get(message.channel.id.toString())).setColor('RANDOM').setTimestamp()
        logChannel.send(logEmbed);
        let Embed=new discord.MessageEmbed().setDescription(`That word is not allowed here`).setColor('RANDOM').setTimestamp()
        let msg=await message.channel.send(Embed);
        message.delete()
        msg.delete({timeout:'3500'})

    }
})

client.login('$$$$$$$$$$$$$$$&&&&&&&&&&&&7');
