'use strict';

const ViberBot = require('viber-bot').Bot;
const BotEvents = require('viber-bot').Events;
const TextMessage = require('viber-bot').Message.Text;
const LocationMessage = require('viber-bot').Message.Location;
require('dotenv').config();

const winston = require('winston');
const toYAML = require('winston-console-formatter');
const ngrok = require('./get_public_url');

var all_users = ngrok.users;
var request = require('request');

const main_keyboard = require ('./main_keyboard');
const SheduleInfoManager = require ('./shedule_keyboard');
const PensionDocInfoManager = require ('./pension_doc_keyboard');

function createLogger() {
    const logger = new winston.Logger({
        level: "debug" // We recommend using the debug level for development
    });

    logger.add(winston.transports.Console, toYAML.config());
    return logger;
}

function say(response, message) {
    response.send(new TextMessage(message));
}

const logger = createLogger();

if (!process.env.VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY) {
    logger.debug('Could not find the Viber account access token key in your environment variable. Please make sure you followed readme guide.');
    return;
}

// Creating the bot with access token, name and avatar
var bot = new ViberBot(logger, {
    authToken: process.env.VIBER_PUBLIC_ACCOUNT_ACCESS_TOKEN_KEY, // Learn how to get your access token at developers.viber.com
    name: "Бот ПФР",
    avatar: 'https://share.cdn.viber.com/pg_download?id=0-04-01-a0cd56f78a6325de694a2e5817b1172ff6c0416faf3e7ebef783eac7a51afa6a&filetype=jpg&type=icon'
        //"https://raw.githubusercontent.com/devrelv/drop/master/151-icon.png" // Just a placeholder avatar to display the user
});

// The user will get those messages on first registration
bot.onSubscribe(response => {
    say(response, `Hi there ${response.userProfile.name}. I am ${bot.name}! Feel free to ask me if a web site is down for everyone or just you. Just send me a name of a website and I'll do the rest!`);
});

bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
    // This sample bot can answer only text messages, let's make sure the user is aware of that.
    if (message instanceof LocationMessage){
        this.onLocationMessage(message, response);
    }
    if (!(message instanceof TextMessage)) {
        say(response, `Sorry. I can only understand text messages.`);
    }
});

bot.prototype.onLocationMessage = function (message, response){
    console.log(message.latitude + " : " + message.longitude);
}

bot.onTextMessage(/./, (message, response) => {
    console.log(response.userProfile.name + " : " + response.userProfile.id);
    all_users.add(response.userProfile.name + " : " + response.userProfile.id);
    const text = message.text;
    if (text != undefined) {
        if (text === main_keyboard.SHEDULE_INFO) {
            const simgr = new SheduleInfoManager();
            const sik = simgr.keyboard();
            let msg = new TextMessage("Узнайте адрес, время работы и контакты клиентской службы", sik);
            response.send(msg);

        } else if (text === main_keyboard.PENS_DOC) {
            const pdmgr = new PensionDocInfoManager();
            const pdk = pdmgr.keyboard();
            let msg = new TextMessage("Узнайте, какие документы необходмы в различных жизненных ситуациях", pdk);
            response.send(msg);

        }else if (text === main_keyboard.MAIN_MENU) {
            let msg = new TextMessage("Выберите действие", main_keyboard.MAIN_KEYBOARD);
            response.send(msg);

        } else if (text.startsWith(main_keyboard.KS_PREFIX)) {
            const simgr = new SheduleInfoManager();
            const shedInfo = simgr.infoAsString(text);
            let msg = new TextMessage(shedInfo, main_keyboard.MAIN_KEYBOARD);
            response.send(msg);
        }else if (text.startsWith(main_keyboard.PENSION_DOC_PREFIX)) {
            const pdmgr = new PensionDocInfoManager();
            const pdInfo = pdmgr.infoAsString(text);
            let msg = new TextMessage(pdInfo, main_keyboard.MAIN_KEYBOARD);
            response.send(msg);

        } else if (text === 'юзеры') {
            var txt = '';
            all_users.forEach(function (value) {
                txt += value + '\n';
            });
            // for (var u in all_users) {
            //     txt += all_users[u] + '\n';
            // }
            let msg = new TextMessage(txt, main_keyboard.MAIN_KEYBOARD);
            response.send(msg);
        } else{
            let msg = new TextMessage("Выберите действие", main_keyboard.MAIN_KEYBOARD);
            response.send(msg);
        }
    }else{
        let msg = new TextMessage("Выберите действие", main_keyboard.MAIN_KEYBOARD);
        response.send(msg);
    }
});



bot.onConversationStarted((userProfile, isSubscribed, context, onFinish) => onFinish(
    new TextMessage(`Чтобы начать работу отправьте мне любое сообщение`), {
    saidThanks: true
}));

if (process.env.NOW_URL || process.env.HEROKU_URL) {
    const http = require('http');
    const port = process.env.PORT || 5000;

    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(process.env.NOW_URL || process.env.HEROKU_URL));
} else {
    logger.debug('Could not find the now.sh/Heroku environment variables. Trying to use the local ngrok server.');
    return ngrok.getPublicUrl().then(publicUrl => {
        const http = require('http');
        const port = process.env.PORT || 5000;

        http.createServer(bot.middleware()).listen(port, () => bot.setWebhook(publicUrl));

    }).catch(error => {
        console.log('Can not connect to ngrok server. Is it running?');
        console.error(error);
        process.exit(1);
    });
}
