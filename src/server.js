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
io.on("connection", (socket) => {
    socket.onAny((e) => {
        console.log(e)
    })
    socket.on("enter_room", (roomName, done) => {
        socket.join(roomName)
        done();
        socket.to(roomName).emit("enter");
    });
    socket.on("disconnecting", () => {
        socket.rooms.forEach(room => socket.to(room).emit("leave"))
    })
    socket.on("new_message", (msg, room, done) => {
        socket.to(room).emit("new_message", msg);
        done();
    })
})



server.listen(3000, handleListen);