const io = require('socket.io')(3000);

io.on('connection', (socket) => {
    console.log('A client connected');

    socket.on("new-connection", (msg) => {
        console.log('New user: ', msg);
    });

    socket.on('note', (msg) => {
        // console.log('note: ', msg);
        io.emit("notesend", msg)
    });
});