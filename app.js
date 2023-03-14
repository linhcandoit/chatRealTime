const express = require("express");
const socket = require("socket.io");
const { Server } = require("socket.io");

const app = express();

const server = app.listen(3000, () => {
  console.log("App is listen on port 3000");
});

app.use(express.static("public"));

// const serverSocket = socket(server);

// serverSocket.on("connection", (socket) => {
//   console.log("Socket connected", socket.id);
// });

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Socket connected", socket.id);
  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });
  socket.on("chat messenge", (messenge) => {
    io.emit("chat messenge", messenge);
  });
});
