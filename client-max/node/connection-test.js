const io = require("socket.io-client");

// socket = io("http://localhost:3000");
socket = io("http://172.232.142.155:3000");

socket.on("connect", () => {
    console.log("Connected to the server");
    socket.emit("new-connection", "new-user");

});
