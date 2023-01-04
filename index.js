const TelegramBot = require('node-telegram-bot-api')

const token = process.env.BOT_TOKEN
const port = process.env.PORT
const host = process.env.HOST
const bot = new TelegramBot(token, {webHook: {port, host}})

exports.handler = async (event, context) => {
  

bot.setWebHook(https://${process.env.URL}/bot${token})

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Welcome to my bot!')
})

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Send me a message and I will echo it back!')
})

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, Echo: ${msg.text})
})
return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello, World!'
    })
  }
}
