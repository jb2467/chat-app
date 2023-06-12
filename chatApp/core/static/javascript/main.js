const roomName = document.getElementById('roomz').textContent.replace(/['"]+/g, '');
const chatSocket = new WebSocket(
    'ws://'
    + window.location.host
    + '/ws/'
    + roomName
    + '/'
);
chatSocket.onmessage = function(e) {
    console.log('onmessage')
}
chatSocket.onclose = function(e) {
    console.log('onclose')
}