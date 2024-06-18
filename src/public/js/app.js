// 프론트에서 socket을 연결
const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");

function backendDone(msg){
    console.log(msg)
}

function handleRoomSubmit(e) {
    e.preventDefault();
    const input = form.querySelector("input");
    //    emit 이벤트이름(텍스트), 페이로드,                 펑션
    // app.js / emit과 server.js / socket.on 이름이 같아야 함.
    socket.emit("enter_room", input.value, backendDone);
    input.value = ""
}

form.addEventListener("submit", handleRoomSubmit);