const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:19006", // Expo local host
  },
});

io.on('connection', (socket) => {
  console.log('Yeni bir kullanıcı bağlandı.');

  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Kullanıcı ayrıldı.');
  });
});

server.listen(3000, () => {
  console.log('Server 3000 portunda çalışıyor.');
});
