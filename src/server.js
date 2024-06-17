// back

import express from "express";
import http from "http";
import SocketIo from "socket.io"
// import WebSocket from "ws";

const app = express()

app.set("view engine", "pug")
app.set("views", __dirname + "/views")
app.use("/public", express.static(__dirname + "/public"))
app.get("/", (req, res) => res.render("home"))
app.get("/*", (req, res) => res.redirect("/"))

const handleListen = () => console.log(`http://localhost:3000`)

const server = http.createServer(app); 
const io = SocketIo(server);

// 백에서 socket을 받을 준비가 되었음.
WebSocketServer.on("connection", socket => {
    console.log(socket)
})



server.listen(3000, handleListen);