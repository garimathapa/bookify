import React from 'react';
import { useParams } from 'react-router-dom';

function Confirmation() {
  const { ticketId } = useParams();

  return (
    <div className="confirmation-page">
      <h1>Booking Confirmed</h1>
      <p>Your ticket ID: {ticketId}</p>
    </div>
  );
}

export default Confirmation;
