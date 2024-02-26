const io = require("socket.io-client");
const Max = require('max-api');

let socket = undefined


Max.addHandler("connect", msg => {
    socket = io(msg);

    socket.on("connect", () => {
        console.log("Connected to the server");
        socket.emit("new-connection", "new-user");
    
        Max.outlet("connected", 1);
    });
    
    socket.on('notesend', (msg) => {
        // console.log('notesend: ', msg);
        parts = msg.split(" ")
        Max.outlet("note", Number.parseInt(parts[0]), Number.parseInt(parts[1]), Number.parseInt(parts[2]));
    });
    

    socket.on('ping', (msg) => {
        Max.outlet("ping");
    });



});





Max.addHandler("note", (channel, note, velocity) => {
    // console.log(`note: ${channel} ${note} ${velocity}`);
    if (socket) {
        socket.emit("note", `${channel} ${note} ${velocity}`);
    }
});
