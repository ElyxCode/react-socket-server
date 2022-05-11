// Servidor express
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // http server.
        this.server = http.createServer(this.app);

        // Configuracion del socket server.
        this.io = socketIo(this.server, { /* configuraciones */ });
    }

    middlewares() {
        // Desplegar el directorio público.
       this.app.use(express.static(path.resolve(__dirname + '../../public')));
    }

    // Configuración de sockets.
    socketConfig(){ 
        new Sockets(this.io);
    }

    // Ejecutar el servidor.
    execute(){
        // inicializar middlewares.
        this.middlewares();
        
        // incializar sockets
        this.socketConfig();
        // Inicializar server.
        this.server.listen(this.port, () => {
            console.log('Servidor ejecutando en el puerto:', this.port);
        });
    }
}

module.exports = Server;