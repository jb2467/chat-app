const roomName = document.getElementById('room-name').textContent.replace(/['"]+/g, '');
const userName = document.getElementById('user-name').textContent.replace(/['"]+/g, '');
const chatSocket = new WebSocket(
    'ws://'
    + window.location.host
    + '/ws/'
    + roomName
    + '/'
);
chatSocket.onmessage = function(e) {
    console.log('onmessage')
    const data = JSON.parse(e.data)
    if ( data.message){
        let html = '<div class="chat-box">'
            html+= '<div class="chat-messages">'
            html += '<p>' + data.username + '</p>'
            html += '<p>' +data.message + '</p></div></div>'
            document.querySelector('#chat-holder').innerHTML += html
    }else{
        alert('empty')
    }
}
chatSocket.onclose = function(e) {
    console.log('onclose')
}

document.querySelector('#chat-message-submit').onclick = function(e){
    e.preventDefault();
    let messageInputDom = document.querySelector('#chat-message-input')
    let message = messageInputDom.value;    
    chatSocket.send(JSON.stringify({
        'message': message,
        'username': userName,
        'room': roomName
    }));
    messageInputDom ='';
    return false;
}
document.querySelector('#chat-holder').scrollTop = document.querySelector('#chat-holder').scrollHeight;