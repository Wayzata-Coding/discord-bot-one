const config = require('./config.json');
const Discord = require('discord.js');
const guild = new Discord.Guild();
const client = new Discord.Client({restTimeOffset: 0});

// ADD YOUR PREFIX!!
const prefix = '';

var commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.on('ready', () => {

  console.log(`the bot do be up though, ${client.user.tag}! `);
  rq.updateTeams();
	client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: `s!help | ${client.guilds.cache.size} servers, ${client.users.cache.size} servers`,  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
	client.user.setActivity(`s!help | ${client.guilds.cache.size} servers, ${client.users.cache.size} members`, {type: "PLAYING"});


});

client.on('message', message => {
	if (!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);


  if (!args[0].replace(/\s/g, '').length) {
  args.shift();
  }

  if(args[0] == undefined) return;

    const command = args.shift().toLowerCase();

    var commander = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))


    if(!commander) return;

  // var commander = client.commands.get(command)

  try {
    // console.log(client)
    if(commander.guildOnly && !message.guild) return message.channel.send('I can\'t execute that command in DMs!')

    commander.execute(message, args, client);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }
	// other commands...
});



var configToken;

if(process.env.BOT_TOKEN){configToken = process.env.BOT_TOKEN.toString() }else {configToken = config.token};

client.login(configToken);

var configToken = "";

client.login(configToken);
