
const socket = io.connect('http://localhost:8080'); // Replace with your server URL


socket.on('message', (message) => {
  console.log(message)
});


window.sendMessage = () => {


  if (message !== '') {
    
    socket.emit('message', message);


  }
};
