const io = require("socket.io-client");
const Max = require('max-api');

let socket = undefined
const chance = new require('chance')();

let username = undefined


Max.addHandler("connect", msg => {

    console.log(`Connecting to server: ${msg}`)

    if (socket) {
        socket.disconnect()
    }


    socket = io(msg);

    socket.on("connect", () => {
        console.log("Connected to the server");
        socket.emit("setusername", username);

        Max.outlet("connected", 1);
    });

    socket.on('notesend', (msg) => {
        parts = msg.split(" ")
        Max.outlet("receivednote", Number.parseInt(parts[0]), Number.parseInt(parts[1]), Number.parseInt(parts[2]));
    });


    socket.on('ping', (msg) => {
        Max.outlet("ping", msg);
    });

    socket.on('speedtest', (msg) => {
        let currentTime = new Date().getTime();
        const latency = currentTime - msg;
        // console.log(`speedtest: ${currentTime - msg}`)
        Max.outlet("latency", latency);
    });
});


Max.addHandler("sendnote", (channel, note, velocity) => {
    if (socket) {
        socket.emit("note", `${channel} ${note} ${velocity}`);
    }
});

Max.addHandler("generatename", msg => {
    Max.outlet("name", chance.name());
})

Max.addHandler("username", msg => {
    username = msg;
    if (socket) {
        socket.emit("setusername", username);
    }
})


setInterval(speedtest, 1000);

function speedtest() {
    if (socket) {
        let currentTime = new Date().getTime();
        socket.emit("speedtest", currentTime);
    }
    

}

Max.outlet("ready");