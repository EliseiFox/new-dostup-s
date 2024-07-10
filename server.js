const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 5555 });
const clients = [];

server.on('connection', (socket) => {
    clients.push(socket);
    socket.on('message', (message) => {
        clients.forEach((client) => {
            if (client !== socket && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    socket.on('close', () => {
        const index = clients.indexOf(socket);
        if (index > -1) {
            clients.splice(index, 1);
        }
    });
});

console.log('Server is running on ws://localhost:5555');
