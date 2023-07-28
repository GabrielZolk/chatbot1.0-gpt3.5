import { Message, Whatsapp, create } from 'venom-bot';

create({
    session: 'chatbot',
    disableWelcome: true,
})
  .then(async (client: Whatsapp) => await start(client))
  .catch((err) => {
    console.log(err)
  })

async function start(client: Whatsapp) {
    client.onMessage(async (message: Message) => {
        if (!message.body || message.isGroupMsg) return

        console.log('Message: ' + message.body)
        const response = `Olá!`

        await client.sendText(message.from, response)
    })
}