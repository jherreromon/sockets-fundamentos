const express = require('express');
const socketIO = require('socket.io');
//para trabajar con socketIO, necesitamos habilitar
//el servicio http que viene con node
const http = require('http');

const path = require('path');





const app = express();
//montamos un servidor y para ello, usamos http sobre express
let server = http.createServer(app);


const publicPath = path.resolve(__dirname, '../public');
//Middleware para habilitar la carpeta pública
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//habilitamos el puerto 3000 (desarrollo)
//o bien el puerto q "heroku" nos habilite (produccion)



//IO = comunicación con el back-end (socket)
//let io = socketIO(server);
module.exports.io = socketIO(server);
require('./sockets/socket');





//en vez de llamar a app.listen se cambia a server.listen
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

})