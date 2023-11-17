document.addEventListener('DOMContentLoaded', () => {
    const socket = io.connect('http://localhost:8080'); // Replace with your server URL
  
    // Event handler for receiving messages
    socket.on('message', (message) => {
      const messageList = document.getElementById('messageList');
      const listItem = document.createElement('li');
      listItem.textContent = message;
      messageList.appendChild(listItem);
    });
  
    // Function to send a message
    window.sendMessage = () => {
      const messageInput = document.getElementById('messageInput');
      const message = messageInput.value.trim();
  
      if (message !== '') {
        // Emit the message to the server
        socket.emit('message', message);
  
        // Clear the input field
        messageInput.value = '';
      }
    };
  });