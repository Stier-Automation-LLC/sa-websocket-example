//include that ws module
const WebSocket = require("ws");
// create the Web socket server and have it listen on port 8082
const wss = new WebSocket.Server({ port: 8082 });
// wss - referes to web socket server
// ws - refers to single connection to the server side
// lets listen for an event when a new client connects to the server
wss.on("connection", ws => {
  console.log("New client connected!");
  // Listen for a message from the clients on the web socket.
  // data is the message in the web socket message from client
  ws.on("message", data => {
    console.log(`Client has sent us: ${data}`);
    //ws.send(data.toString().toUpperCase());
    ws.send(`poop`);
  });

  // listen for the close event
  ws.on("close", () => {
    console.log("client has disconnected!")
  });
});