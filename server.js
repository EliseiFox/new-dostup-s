const socket = new WebSocket('ws://humble-space-yodel-wrx64rqj775cvgwj.github.dev/');

socket.onopen = function(event) {
    console.log('Connected to server');
};

socket.onmessage = function(event) {
    console.log('Message from server', event.data);
};

socket.onclose = function(event) {
    console.log('Disconnected from server');
};

socket.onerror = function(error) {
    console.log('Error', error);
};
