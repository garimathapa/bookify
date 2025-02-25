import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './auth/Login';
import Registration from './auth/Registration';
import AvailableTickets from './pages/AvailableTickets';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/tickets" element={<AvailableTickets />} />
        <Route path="/book/:ticketId" element={<Booking />} />
        <Route path="/confirmation/:ticketId" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
