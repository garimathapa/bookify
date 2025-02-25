import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AvailableTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch available tickets from the server
    // Example data:
    setTickets([
      { id: 1, destination: 'New York', price: 300 },
      { id: 2, destination: 'London', price: 500 },
    ]);
  }, []);

  return (
    <div className="available-tickets">
      <h1>Available Tickets</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <Link to={`/book/${ticket.id}`}>
              {ticket.destination} - ${ticket.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableTickets;
