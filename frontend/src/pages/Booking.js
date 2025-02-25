import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Booking() {
  const { ticketId } = useParams();
  const [ticket, setTicket] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch ticket details from the server
    setTicket({ id: ticketId, destination: 'New York', price: 300 });
  }, [ticketId]);

  const handleBooking = () => {
    // Call API to book ticket
    navigate(`/confirmation/${ticketId}`);
  };

  return (
    <div className="booking-page">
      <h1>Book Ticket</h1>
      <p>Destination: {ticket.destination}</p>
      <p>Price: ${ticket.price}</p>
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
}

export default Booking;
