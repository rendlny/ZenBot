//ZenBot
const Discord = require('discord.js');
var auth = require('./auth.json');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('I return.');
});

bot.on('message', msg => {
    if (msg.author !== "@ZenBot") {

// -- INTERACTIONS -- INTERACTIONS -- INTERACTIONS -- INTERACTIONS -- INTERACTIONS -- INTERACTIONS --
        //messages starting w/ "zen" or "zenbot"
        if (msg.content.startsWith("zen") || msg.content.startsWith("zenbot")) {

            //when zen is called
            if (msg.content === "zen" || msg.content === "zenbot") {
                msg.reply("you called?");
            }

            //tell zen to say something
            if (msg.content.startsWith("zen say") || msg.content.startsWith("zenbot say")) {

                var says = msg.content.split(" say ");
                var x = Math.floor((Math.random() * 3) + 1);

                if (msg.content.includes("meme") || msg.content.includes("memes")) {
                    msg.reply("I'd rather not");
                } else if (x === 3) {
                    msg.reply("no");
                } else {
                    msg.channel.sendMessage(says[1]);
                }
            }

            //checking for questions
            if (msg.content.endsWith("?") && (msg.author !== "@ZenBot")) {

                //Q = zen?
                if (msg.content === "zen?" || msg.content === "zenbot?") {
                    msg.channel.sendMessage("yes?");
                }

                //Q = zen do i think?
                else if (msg.content === "zen do i think?" || msg.content === "zenbot do i think?") {
                    msg.channel.sendMessage("does a submarine swim?");
                } else {
                    var x = Math.floor((Math.random() * 20) + 1);
                    var answer = "";

                    if (x === 1) {
                        answer = "It is certain";
                    } else if (x === 2) {
                        answer = "It is decidedly so";
                    } else if (x === 3) {
                        answer = "Without a doubt";
                    } else if (x === 4) {
                        answer = "Yes, definitely";
                    } else if (x === 5) {
                        answer = "You may rely on it";
                    } else if (x === 6) {
                        answer = "As I see it, yes";
                    } else if (x === 7) {
                        answer = "Most likely";
                    } else if (x === 8) {
                        answer = "Outlook good";
                    } else if (x === 9) {
                        answer = "Yes";
                    } else if (x === 10) {
                        answer = "Signs point to yes";
                    } else if (x === 11) {
                        answer = "Reply hazy try again";
                    } else if (x === 12) {
                        answer = "Ask again later";
                    } else if (x === 13) {
                        answer = "Better not tell you now";
                    } else if (x === 14) {
                        answer = "Cannot predict now";
                    } else if (x === 15) {
                        answer = "Concentrate and ask again";
                    } else if (x === 16) {
                        answer = "Don't count on it";
                    } else if (x === 17) {
                        answer = "My reply is no";
                    } else if (x === 18) {
                        answer = "My sources say no";
                    } else if (x === 19) {
                        answer = "Outlook not so good";
                    } else if (x === 20) {
                        answer = "Very doubtful";
                    }

                    msg.reply(answer);
                }
            }
        }

        //messages ending w/ "zen" or "zenbot"
        else if (msg.content.endsWith("zen") || msg.content.endsWith("zenbot")) {

            //if msg starts w/ "hi"
            if (msg.content.startsWith("hi")) {
                msg.reply("peace be upon you");
            } else if (msg.content.startsWith("hello")) {
                msg.reply("greetings");
            } else if (msg.content === ("good zen")) {
                msg.reply(":ok_hand:");
            } else if (msg.content === ("bad zen")) {
                msg.reply(":frowning:");
            }
        }


//   -- COMMANDS -- COMMANDS -- COMMANDS -- COMMANDS -- COMMANDS -- COMMANDS -- (using "-")
        if (msg.content.startsWith("-")) {

            //ping
            if (msg.content === '-ping') {
                msg.channel.sendMessage('pong!');

                //alert the console
                console.log("pong-ed " + msg.author.username);
            }

            //ask Kawaiibot a question
            else if (msg.content === "-q") {
                msg.channel.sendMessage('kawaiibot do I think?');
            }

            //coinflip
            else if (msg.content === "-coinflip")
            {
                var x = Math.floor((Math.random() * 2) + 1);
                var answer = "";

                if (x === 1) {
                    answer = "heads";
                } else {
                    answer = "tails";
                }
                msg.channel.sendMessage(answer);
            }

            //d4
            else if (msg.content === "-d4") {
                var x = Math.floor((Math.random() * 4) + 1);
                msg.channel.sendMessage(x);
            }

            //d6
            else if (msg.content === "-d6") {
                var x = Math.floor((Math.random() * 6) + 1);
                msg.channel.sendMessage(x);
            }

            //d8
            else if (msg.content === "-d8") {
                var x = Math.floor((Math.random() * 8) + 1);
                msg.channel.sendMessage(x);
            }

            //d10
            else if (msg.content === "-d10") {
                var x = Math.floor((Math.random() * 10) + 1);
                msg.channel.sendMessage(x);
            }

            //d12
            else if (msg.content === "-d12") {
                var x = Math.floor((Math.random() * 12) + 1);
                msg.channel.sendMessage(x);
            }

            //d20
            else if (msg.content === "-d20") {
                var x = Math.floor((Math.random() * 20) + 1);
                msg.channel.sendMessage(x);
            }

            //help
            else if (msg.content === "-help") {
                msg.reply("Greetings, I am Zenbot, the superior bot. \n Use -commands for a list of commands");
            }

            //commands list
            else if (msg.content === "-commands") {
                msg.reply('\n -ping \n -q [gets me to ask Kawaiibot a question] \n -help \n -coinflip \n -d4  \n -d6  \n -d8  \n -d10  \n -d12  \n -d20');
            }


            // -- MOD COMMANDS -- MOD COMMANDS -- MOD COMMANDS -- MOD COMMANDS -- MOD COMMANDS
            else if (msg.author.id == 207867044140417025) {

                //myid
                if (msg.content === "-myid") {
                    msg.channel.sendMessage(msg.author.id);
                }

                //idle
                else if (msg.content === "-idle") {
                    bot.setStatusIdle();
                }

                //online
                else if (msg.content === "-online") {
                    bot.setStatusOnline();
                }

            }
        }

        // -- OTHER -- OTHER -- OTHER -- OTHER -- OTHER -- OTHER -- OTHER -- OTHER -- OTHER

        var currentdate = new Date();
        /*var datetime =  currentdate.getDate() + "/"+(currentdate.getMonth()+1 )
         + "/" + currentdate.getFullYear() + " @ "
         + currentdate.getHours() + ":"
         + currentdate.getMinutes() + ":" + currentdate.getSeconds();
         var time = currentdate.getHours() + ":" + currentdate.getMinutes();
         */var hour = currentdate.getHours();

        //get current time and check it when someone says gn etc and give reply
        //if(msg.content===("date")){
        //	msg.reply(datetime);
        //}
        //if(msg.content===("time")){
        //	msg.reply(time);
        //}

        //greetings
        if ((msg.content === ("hi") && msg.content !== ("hi zen") && msg.content !== ("hi zenbot")) || (msg.content !== ("hello zen") && msg.content === ("hello") && msg.content !== ("hello zenbot"))) {
            msg.reply("greetings");
        }

        //goodnight
        else if (msg.content.startsWith("goodnight") || msg.content.startsWith("night") || msg.content.startsWith("gn")) {
            if (hour > 20) {
                msg.reply("goodnight");
            } else {
                msg.reply("It's not night you fool");
            }
        }

        //goodbye
        else if (msg.content.startsWith("bye") || msg.content.startsWith("goodbye")) {
            msg.reply("walk in harmony");
        }
        //Amen reply to RNGesus
        if ((msg.content === ("amen")) && (msg.author === ("@RenDlny#6815"))) {
            msg.reply("amen");
        }
        //sombra

        //check that kawaiinbot is online and someone is in the voice channel before sending !sombra
        else if (((msg.content.includes("sombra")) || (msg.content.startsWith("sombra")) || (msg.content.endsWith("sombra"))) && (msg.content !== "!sombra") && !(msg.content.includes("!sombra"))) {

            //Create array of servers bot is connected to
            guilds = bot.guilds.array();

            var vc = null;
            //For each guild (server) bot is connected to,
            //if there is a member which is the message author
            //and they are connected to a voice channel in the
            //server, channelToJoin = the member's channel.
            for (var i = 0; i < guilds.length; i++) {
                if (guilds[i].members.get(msg.author.id) !== null) {
                    var x = guilds[i].members.get(msg.author.id);
                    if (x.voiceChannelID !== null) {
                        vc = x.voiceChannelID;
                    }
                }
            }

            if (vc === null) {
                msg.reply("Where's Sombra when you need her?");
            } else {

                //Join the channel
                bot.channels.get(vc).join().then(connection => {
                    msg.channel.sendMessage("!sombra ");
                    //playSoundFile(connection,responseSound[message.content]);

                    setTimeout(function () {
                        connection.disconnect();
                    }, 2000);

                });
            }
        }

        //Wake me updateCommands
        if ((msg.content === ("wake me up")) || (msg.content === ("wake me up inside"))) {
            msg.reply("can't wake up");
        }

        // -- TESTING AREA -- TESTING AREA -- TESTING AREA -- TESTING AREA -- TESTING AREA --
        if (msg.content === ("author")) {
            msg.reply(msg.author);
        }
    }


    bot.on("disconnected", () => {
        //alert the console
        console.log("Darkness falls.");

        //exit node.js with an error
        process.exit(1);
    });

});

bot.login(auth.token);
