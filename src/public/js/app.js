// front

const messageList = document.querySelector("ul");
const nickForm = document.querySelector("#nick");
const messageForm = document.querySelector("#message");
const socket = new WebSocket(`ws://${window.location.host}`);

function makeMessage(type, payload) {
    const msg = {type, payload};
    return JSON.stringify(msg);
}

// 방법1
// socket.addEventListener("close", () => {
//     console.log("app.js 연결해제")
// })
// 방법2
function handleSocketClose (){
    console.log("app.js 연결해제")
}
socket.addEventListener("close", handleSocketClose)

socket.addEventListener("open", () => {
    console.log("app.js 연결");
})

socket.addEventListener("message", (message) => {
    const li = document.createElement("li");
    const span = document.querySelector("span")
    li.innerText = message.data;
    messageList.append(li);
    span.innerText = nickForm.input.value
})



function handleSubmit(e) {
    e.preventDefault();
    const input = messageForm.querySelector("input");
    socket.send(makeMessage("new_message", input.value));
    input.value = "";
}

function handleNickSubmit (e) {
    e.preventDefault();
    const input = nickForm.querySelector("input");
    socket.send(makeMessage("nickname", input.value));
    input.value = "";
}

messageForm.addEventListener("submit", handleSubmit)
nickForm.addEventListener("submit", handleNickSubmit)
