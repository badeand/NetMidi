const io = require('socket.io')(3000);

io.on('connection', (socket) => {

    console.log({
        "Event": "Connection",
        "Socket ID": socket.id,
        "Username": socket.data.username,
    })


    socket.on("new-connection", (msg) => {
        socket.data.username = msg
        console.log({
            "Event": "new-connection",
            "Socket ID": socket.id,
            "Username": socket.data.username,
        })

    });

    socket.on('disconnect', (reason) => {
        console.log({
            "Event": "Disconnect",
            "Socket ID": socket.id,
            "Username": socket.data.username,
            "Reason": reason,
        })
    });

    socket.on('note', (msg) => {
        // console.log('note: ', msg);
        io.emit("notesend", msg)
    });


});

setInterval(ping, 1000);

function ping() {

    users = []
    io.of("/").sockets.forEach(sck => users.push({
        "username": sck.data.username,
        "socket-id": sck.id,
    }));

    io.emit("ping", {
        "users": users
    })
}

console.log("Server started")