const { io } = require('../index');
//mensajes sockets
io.on('connection', client =>{

    console.log('Cliente conectado');


    client.on('diconnect', () => {
        console.log('Cliente desconectado');
    });

    client.on('mensaje', ( payload ) => {
        console.log('Mensaje!!!!', payload);

        io.emit('mensaje', {admin: 'Nuevo Mensaje' });
    });

    client.on('emitir-mensaje', ( payload ) => {
        console.log(payload);
        // client.broadcast.emit('nuevo-mensaje', payload);
    });
});