const WebSocket = require('ws');
const http = require('http');
const express = require('express');
const path = require('path')


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end()
});

const wss = new WebSocket.Server({ server });
wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', (message) => {

        console.log(message)

        wss.clients.forEach((client) => {

            console.log(message)
            client.send(message);
            client.emit("Hello")

        });
    });

    ws.on('close', () => {

        console.log('Client disconnected');
    });
});

server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});