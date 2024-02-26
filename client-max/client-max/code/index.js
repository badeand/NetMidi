const io = require("socket.io-client");
const Max = require('max-api');

const socket = io("http://172.232.134.35:3000");

socket.on("connect", () => {
    console.log("Connected to the server");
    socket.emit("new-connection", "new-user");
});

socket.on('notesend', (msg) => {
    // console.log('fromserver: ', msg);
    parts = msg.split(" ")
    Max.outlet("note", Number.parseInt( parts[0]), Number.parseInt( parts[1]));
});

Max.addHandler("note", (note, velocity) => {
    socket.emit("note", `${note} ${velocity}`);
});
