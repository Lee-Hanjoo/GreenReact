// back

import express from "express";
import http from "http";
import WebSocket from "ws";

const app = express()

app.set("view engine", "pug")
app.set("views", __dirname + "/views")
app.use("/public", express.static(__dirname + "/public"))
app.get("/", (req, res) => res.render("home"))
app.get("/*", (req, res) => res.redirect("/"))

const handleListen = () => console.log(`http://localhost:3000`)

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

function handleSocketClose (){
    console.log("server.js 연결해제")
}

wss.on("connection", (socket) => {
    console.log("server.js 연결")
    // 1 방법
    // socket.on("close", () => console.log("server.js 연결해제"))
    // 2 방법
    socket.on("close", handleSocketClose)
    socket.on("message", message => {
        console.log(message.toString('utf8'));
    });
    socket.send("이것은 최초 메세지.")
});

server.listen(3000, handleListen);
//