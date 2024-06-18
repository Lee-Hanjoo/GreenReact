// 프론트에서 socket을 연결
const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

function handleRommSubmit(e) {
    event.preventDefault();
    const input = form.querySelector("input");
    socket.emit("room");
    input.value = ""
}

form.addEventListener("submit", handleRommSubmit);