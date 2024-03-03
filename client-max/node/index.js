const io = require("socket.io-client");
const Max = require('max-api');

let socket = undefined
const chance = new require('chance')();

let username = undefined


Max.addHandler("connect", msg => {

    console.log(`Connecting to server: ${msg}`)

    socket = io(msg);

    socket.on("connect", () => {
        console.log("Connected to the server");
        socket.emit("new-connection", username);
    
        Max.outlet("connected", 1);
    });
    
    socket.on('notesend', (msg) => {
        parts = msg.split(" ")
        Max.outlet("receivednote", Number.parseInt(parts[0]), Number.parseInt(parts[1]), Number.parseInt(parts[2]));
    });
    

    socket.on('ping', (msg) => {
        Max.outlet("ping");
    });
});


Max.addHandler("sendnote", (channel, note, velocity) => {
    if (socket) {
        socket.emit("note", `${channel} ${note} ${velocity}`);
    }
});

Max.addHandler("generatename", msg => { 
    console.log("generatename")
    Max.outlet("name", chance.name());
})

Max.addHandler("username", msg => { 
    username = msg;
})


Max.outlet("ready");