const fs = require('fs');
const config = require('./config.json');
const Discord = require('discord.js');
const guild = new Discord.Guild();
const client = new Discord.Client({restTimeOffset: 0});

const prefix = '!';

client.on('ready', () => {

  console.log(`the bot do be up though, ${client.user.tag}! `);

	client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: `!help | ${client.guilds.cache.size} servers, ${client.users.cache.size} servers`,  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
	client.user.setActivity(`!help | ${client.guilds.cache.size} servers, ${client.users.cache.size} members`, {type: "PLAYING"});


});

client.on('message', message => {
	
});



var configToken;

client.login(configToken);
