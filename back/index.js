const { init } = require('./src/app');

const { app, usernames } = init();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 8000;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

io.origins('http://localhost:3000');

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log(socket.username, 'has left');

    if (socket.username) {
      usernames.delete(socket.username);
    }

    io.emit('usernames', Array.from(usernames));
  });

  socket.on('join', (username) => {
    console.log(username, 'has joined');
    socket.username = username;

    usernames.add(username);

    io.emit('usernames', Array.from(usernames));
  });
});

