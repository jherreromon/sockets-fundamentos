const { io } = require('../server');



//===================en la parte del server cuando recibimos la conexion
io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'bienvenido a esta aplicacion'
    })

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //escuchar al cliente ('enviarMensaje' para identificar comunicacion
    //tanto en cliente como en servidor)
    //el callback se pasa desde el cliente emisor

    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', {
            usuario: data.usuario,
            mensaje: data.mensaje
        })

        /*  if (mensaje.usuario) {
            callback({
                resp: 'todo salio bien'
            });
        } else {
            callback({
                resp: 'todo salio mal'
            });

        }
 */

    });
});


//*******************************+ */