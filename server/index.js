const port = 3000

const io = require('socket.io')(port);

io.on('connection', (socket) => {

    console.log({
        "Event": "Connection",
        "Socket ID": socket.id,
    })


    socket.on("setusername", (msg) => {
        socket.data.username = msg
        console.log({
            "Event": "setusername",
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

    socket.on('speedtest', (msg) => {
        io.emit("speedtest", msg)
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
