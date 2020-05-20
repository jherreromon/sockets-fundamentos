//habilitación del servicio de socket.
//es similiar al que hay en el back-end
var socket = io();

//en la parte del cliente cuando conectamos socket
socket.on('connect', function() {
    console.log('conectado al servidor');
});

//mensaje cuando tiramos el servidor

socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

//enviar mensajes: param->(param1, param2, callback)
//el callback, se le envia al servidor;
socket.emit('enviarMensaje', {
    usuario: 'fernando',
    mensaje: 'hola mundo'
        //en resp->recibimos la respuesta  q nos manda el servidor
}, function(resp) {
    console.log('respuesta server:', resp)
});

//**********Escuchar información************
//escuchamos el evento "'enviarMensaje'" desde el servidor
socket.on('enviarMensaje', function(mensaje) {

    console.log('servidor:', mensaje);
})