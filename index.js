const venom = require('venom-bot'); // Este comando busca en el proyecto

// ¡Se necesita la función de create para llamar al bot!
venom.create()
.then((client) => start(client))
.catch((erro) => {
  console.log(erro);
});

function start(client) {
client.onMessage((message) => {
  if (message.body === 'keysi' && message.isGroupMsg === false) {
    client
      .sendText(message.from, 'amor a distnacia con el sin vieejo')
      .then((result) => {
        console.log('Result: ', result); //return object success
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
      });

  }
});
}


