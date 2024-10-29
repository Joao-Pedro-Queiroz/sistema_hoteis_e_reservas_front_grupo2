import React from 'react';
import { List } from '@mui/material'; // MUI imports
import ReservationListItem from './ReservationListItem';

const ReservationList = ({ reservations }) => {
  // Sort reservations by date
  const sortedReservations = reservations.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <List>
      {sortedReservations.map((reservation) => (
        <ReservationListItem key={reservation.id} reservation={reservation} />
      ))}
    </List>
  );
};

export default ReservationList;