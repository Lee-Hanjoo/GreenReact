// 프론트에서 socket을 연결
const socket = io();

const welcome = document.getElementById("welcome");
const room = document.getElementById("room");
const form = welcome.querySelector("form");

room.hidden = true;

let rommName;

function addMessage(message){
    const ul = room.querySelector("ul");
    const li = document.createElement("li");
    li.innerText = message;
    ul.appendChild(li)
}
function handleMessageSubmit(e){
    e.preventDefault();
    const input = room.querySelector("input")
    const value = input.value;
    socket.emit("new_message", input.value, roomName, () => {
        addMessage(`너: ${value}`);
    });
    input.value = "";
}
function showRoom(){
    welcome.hidden = true;
    room.hidden = false;
    const h3 = room.querySelector("h3");
    h3.innerText = `[${roomName}]에 입장하였습니다.`
    const form = room.querySelector("form")
    form.addEventListener("submit", handleMessageSubmit);
}

function handleRoomSubmit(e) {
    e.preventDefault();
    const input = form.querySelector("input");
    //    emit 이벤트이름(텍스트), 페이로드,                 펑션
    // app.js / emit과 server.js / socket.on 이름이 같아야 함.
    socket.emit("enter_room", input.value, showRoom);
    roomName = input.value;
    input.value = ""
}

form.addEventListener("submit", handleRoomSubmit);

socket.on("enter", () => {
    addMessage("누군가 입장하셨습니다용..")
})

socket.on("leave", () => {
    addMessage("누군가 나갔습니다용..")
})

// socket.on("new_message", (msg) => {addMessage(msg)}); 랑 같은 말임.
socket.on("new_message", addMessage);