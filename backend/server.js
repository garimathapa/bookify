const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

// Example: A flight search endpoint (static data for now)
app.post('/api/search-flights', (req, res) => {
  const { departure, arrival, departureDate, returnDate } = req.body;

  // Example data (real-time flight data would be fetched here)
  const flights = [
    { flightId: 'A123', departure, arrival, departureDate, returnDate, price: '$300' },
    { flightId: 'B456', departure, arrival, departureDate, returnDate, price: '$400' }
  ];

  res.json(flights);
});

// Real-time flight updates with socket.io
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
