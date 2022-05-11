const Server = require("./models/server");
require('dotenv').config();

const server = new Server();

server.execute();


// io.on('connection', ( socket ) => {

//     socket.on('message-to-server', (data) => {
//         console.log(data);

//         io.emit('message-from-server', data);
//     });

//     ///Servidor emite un evento (mensaje)
//     // socket.emit('welcome-message', {
//     //     msg: 'welcome to server',
//     //     date: new Date().getTime()
//     // });

//     // El servidor escucha el mensaje
//     // socket.on('client-message', (data) => {
//     //     console.log(data);
//     // });
// });
