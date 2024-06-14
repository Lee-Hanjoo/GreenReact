// front

const socket = new WebSocket(`ws://${window.location.host}`);

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
    console.log("뭐라고 보냈을까?", message.data)
})

setTimeout(() => {
    socket.send("이것은 3초뒤에 보내지는 메세지.")
}, 3000);